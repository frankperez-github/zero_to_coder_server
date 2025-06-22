import express from 'express';
import { createQuestion, getNextQuestions, getNextTopicsQuestions, getQuestions, getStartingPoints, runTestCases } from '../controllers/Questions';
import { authMiddleware } from '../middlewares/auth';

const router = express.Router();

router.post('/', createQuestion);
router.get('/', authMiddleware, getQuestions);
router.post('/:questionId/next', authMiddleware, getNextQuestions);
router.get('/:questionId/next-topics', authMiddleware, getNextTopicsQuestions);
router.get('/start', authMiddleware, getStartingPoints);
router.post('/:questionId/test-solution', authMiddleware, runTestCases)

export default router;