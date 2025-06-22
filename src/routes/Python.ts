import { Router } from 'express';
import { executePython } from '../controllers/Python';
import { authMiddleware } from '../middlewares/auth';

const router = Router();

router.post('/execute', authMiddleware, executePython);

export default router;
