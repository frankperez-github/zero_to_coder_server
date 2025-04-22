import express from 'express';
import { register, login, getMyUser } from '../controllers/Users';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/', getMyUser);

export default router;
