import express from 'express';
import { register, login, getMyUser, addPassedTopic, getPassedTopics } from '../controllers/Users';
import { authMiddleware } from '../middlewares/auth';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', authMiddleware, getMyUser);
router.post('/me/topic', addPassedTopic);
router.get('/me/passed-topics', authMiddleware, getPassedTopics);

export default router;
