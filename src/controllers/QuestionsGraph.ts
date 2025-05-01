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

                    // Check if all topics of question A are needed in question B
                    const topicsA = questionA.topics;
                    const topicsB = questionB.topics;

                    if (topicsA.length === 0 || topicsB.length === 0)
                        continue

                    const allTopicsNeeded = topicsA.every((topic: TopicType) => topicsB.includes(topic));
                    if (allTopicsNeeded) {
                        questionsGraph.edges.push({
                            from: questionA.id,
                            to: questionB.id
                        });
                    }
                }
            }
        }
        return questionsGraph
    } catch (error:any) {
        console.log(error.message);
    }
}

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
