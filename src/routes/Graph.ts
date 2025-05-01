
import express from 'express';
import { authMiddleware } from '../middlewares/auth';
import {getQuestionsGraphData} from '../controllers/QuestionsGraph';



const router = express.Router();

router.get('/', authMiddleware, getQuestionsGraphData);

export default router;
