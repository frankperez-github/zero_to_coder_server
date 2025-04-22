import express from 'express';
import { createQuestion, getQuestions } from '../controllers/Questions';

const router = express.Router();

router.post('/', createQuestion);
router.get('/', getQuestions);

export default router;
