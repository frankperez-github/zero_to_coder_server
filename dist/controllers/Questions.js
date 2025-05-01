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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuestions = exports.createQuestion = void 0;
exports.seedQuestions = seedQuestions;
const Question_1 = __importDefault(require("../models/Question"));
const questions_1 = require("../seeds/questions");
const createQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const question = yield Question_1.default.create(req.body);
        res.status(201).json(question);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.createQuestion = createQuestion;
const getQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const questions = yield Question_1.default.findAll();
        res.json(questions);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getQuestions = getQuestions;
function seedQuestions() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Map the question data to match the model structure
            const formattedQuestions = questions_1.questions.map(q => ({
                type: q.type,
                topics: q.topics,
                difficulty: q.difficulty,
                text: q.text,
                options: q.options,
                answer: q.answer,
                hint: q.hint,
                explanation: q.explanation
            }));
            // Bulk create the questions
            yield Question_1.default.bulkCreate(formattedQuestions);
            console.log('✅ Successfully seeded questions!');
            return;
        }
        catch (error) {
            console.error('Error seeding questions:', error);
            return;
        }
    });
}
