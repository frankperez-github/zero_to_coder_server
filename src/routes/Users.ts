import express from 'express';
import { register, login, getMyUser, addPassedTopic } from '../controllers/Users';
import { authMiddleware } from '../middlewares/auth';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', authMiddleware, getMyUser);
router.post('/me/topic', addPassedTopic);

export default router;
