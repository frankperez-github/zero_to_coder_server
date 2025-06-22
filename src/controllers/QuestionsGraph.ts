import Question from "../models/Question";
import { Request, Response } from "express";
import { TopicType } from "../types/validTopics";
import { sortByTopicsLength } from "./Questions";

export const getQuestionsGraph = async () => {
    /* Each question will be a node in the graph and the edge A --> B will exist if the topics 
    in question A are needed in question B */
    try {
        let nodes: Question[] = [];
        let edges: {from: string, to:string}[] = [];

        const questionsGraph = {
            nodes,
            edges
        };

        // Get all questions from the database
        const questions = await Question.findAll();

        // Create nodes for each question
        questions.forEach((question: any) => {
            questionsGraph.nodes.push({
                ...question.dataValues
            });
        });

        // Create edges between questions based on topics
        for (let i = 0; i < questions.length; i++) {
            for (let j = 0; j < questions.length; j++) {
                if (i !== j) {
                    const questionA = questions[i];
                    const questionB = questions[j];

                    const topicsA = questionA.topics;
                    const topicsB = questionB.topics;
                    
                    const difficultyA = questionA.difficulty
                    const difficultyB = questionB.difficulty

                    if (topicsA.length === 0 || topicsB.length === 0)
                        continue
                    
                    // Check if all topics of question A are needed in question B
                    const allTopicsNeeded = topicsA.every((topic: TopicType) => topicsB.includes(topic));
                    if (allTopicsNeeded) {
                        const BharderThanA = (difficultyB == "medium" && difficultyA == "easy") || (difficultyB == "hard" && difficultyA == "medium")
                        // Add edge if difficulty is same or superior
                        if (difficultyB == difficultyA || BharderThanA)
                        {
                            questionsGraph.edges.push({
                                from: questionA.id,
                                to: questionB.id
                            });
                        }
                    }
                    // Check topics conceptual dependence
                    else
                    {
                        let dependent = false;
                        for (const topicA of topicsA) {
                            for (const topicB of topicsB) {
                                if (isDirectPrerequisite(topicA, topicB, topicDependencies)) {
                                    questionsGraph.edges.push({
                                        from: questionA.id,
                                        to: questionB.id
                                    });
                                    dependent = true;
                                    break;
                                }
                            }
                            if (dependent) break;
                        }
                    }
                }
            }
        }
        return questionsGraph
    } catch (error:any) {
        console.log(error.message);
    }
}

const topicDependencies: Record<string, string[]> = {
    "Sintaxis básica": ["Tipos de datos", "Condicionales"],
    "Tipos de datos": ["Operadores", "Condicionales", "Bucles"],
    "Operadores": ["Condicionales"],
    "Condicionales": ["Estructuras de control"],
    "Estructuras de control": ["Funciones"],
    "Funciones": ["Manejo de errores", "Encapsulamiento"],
    "Encapsulamiento": ["Objetos"],
    "Objetos": ["Diccionarios", "Diccionarios, mapas u objetos"],
    "Bucles": ["Contadores", "Acumuladores", "Arreglos", "Matrices"],
    "Matrices": ["Diccionarios, mapas u objetos"]
};

/**
 * Checks whether a topic is a direct prerequisite of another topic,
 * based on a predefined topic dependency graph.
 *
 * This function does not check transitive (indirect) prerequisites —
 * it only verifies whether `topicB` is listed as an immediate child of `topicA`
 * in the `topicDependencies` adjacency list.
 *
 * Used to determine whether a question's topic conceptually precedes
 * another question's topic in a learning progression.
 *
 * @param topicA - The potential prerequisite topic.
 * @param topicB - The target topic that may depend on topicA.
 * @param graph - A map of topic dependencies (adjacency list).
 * @returns true if topicA is a direct prerequisite of topicB.
 */
const isDirectPrerequisite = (
    topicA: string,
    topicB: string,
    graph: Record<string, string[]>
): boolean => {
    return (graph[topicA] || []).includes(topicB);
};

export const getQuestionsGraphData = async (req: Request, res: Response) => {
    try {
        const graph = await getQuestionsGraph();

        if (!graph) {
            res.status(500).json({ error: 'Graph data could not be loaded' });
            return
        }

        const idToQuestion = new Map(
            graph.nodes.map((q) => [q.id, q])
        );

        const nodes = graph.nodes.sort((a,b)=>sortByTopicsLength(a,b)).map((node) => {
            const entryEdges = graph.edges
                .filter((edge) => edge.to === node.id)
                .map((edge) => ({
                    topics: idToQuestion.get(edge.from)?.topics || []
                }));

            const exitEdges = graph.edges
                .filter((edge) => edge.from === node.id)
                .map((edge) => ({
                    topics: idToQuestion.get(edge.to)?.topics || []
                }));

            return {
                id: node.id,
                topics: node.topics,
                entryEdges,
                exitEdges
            };
        });

        res.status(200).json(nodes);
    } catch (error: any) {
        console.error(error.message);
        res.status(500).json({ error: error.message });
    }
};
