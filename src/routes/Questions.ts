import express from 'express';
import { createQuestion, getNextQuestions, getNextTopicsQuestions, getQuestions, getStartingPoints, markQuestionAsDone } from '../controllers/Questions';
import { authMiddleware } from '../middlewares/auth';

const router = express.Router();

router.post('/', createQuestion);
router.get('/', authMiddleware, getQuestions);
router.put('/:questionId/done', authMiddleware, markQuestionAsDone);
router.get('/:questionId/next', authMiddleware, getNextQuestions);
router.get('/:questionId/next-topics', authMiddleware, getNextTopicsQuestions);
router.get('/start', authMiddleware, getStartingPoints);

export default router;