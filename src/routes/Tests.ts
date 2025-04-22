import express from 'express';
import { createTest, getTests } from '../controllers/Tests';

const router = express.Router();

router.post('/', createTest);
router.get('/', getTests);

export default router;
