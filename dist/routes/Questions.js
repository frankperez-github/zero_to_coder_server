"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Questions_1 = require("../controllers/Questions");
const auth_1 = require("../middlewares/auth");
const router = express_1.default.Router();
router.post('/', Questions_1.createQuestion);
router.get('/', auth_1.authMiddleware, Questions_1.getQuestions);
router.post('/:questionId/next', auth_1.authMiddleware, Questions_1.getNextQuestions);
router.get('/:questionId/next-topics', auth_1.authMiddleware, Questions_1.getNextTopicsQuestions);
router.get('/start', auth_1.authMiddleware, Questions_1.getStartingPoints);
router.post('/:questionId/test-solution', auth_1.authMiddleware, Questions_1.runTestCases);
exports.default = router;
