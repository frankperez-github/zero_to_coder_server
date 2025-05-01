"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuestionsGraph = void 0;
const getQuestionsGraph = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /* Each question will be a node in the graph and the edge A --> B will exist if the topics
    in question A are needed in question B */
    try {
        let nodes = [];
        let edges = [];
        const questionsGraph = {
            nodes,
            edges
        };
        // Get all questions from the database
        const questions = yield req.db.Question.findAll();
        // Create nodes for each question
        questions.forEach((question) => {
            questionsGraph.nodes.push(Object.assign({}, question));
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
                    const allTopicsNeeded = topicsA.every((topic) => topicsB.includes(topic));
                    if (allTopicsNeeded) {
                        questionsGraph.edges.push({
                            from: questionA.id,
                            to: questionB.id
                        });
                    }
                }
            }
        }
        res.json(questionsGraph);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getQuestionsGraph = getQuestionsGraph;
