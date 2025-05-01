import { Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserRequest from '../types/userRequest';

export const register = async (req: Request, res: Response) => {
    try {
        const {email, password, name} = req.body;
        if (!email || !password) {
            res.status(400).json({ message: 'Email and password are required' });
            return
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ email, name, password: hashedPassword });
        res.status(201).json(user);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            res.status(401).json({ message: 'Invalid credentials' });
            return
        }

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getMyUser = async (req: UserRequest, res: Response) => {
    try {
        res.status(200).json(req.user);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const addPassedTopic = async (req: UserRequest, res: Response) => {
    try {
        const user = req.user;
        const updatedUser = await user?.update({
            ...user,
            passedTopics: [...user?.passedTopics, req.body.topic]
        })
        updatedUser?.save()
        res.status(200).json(updatedUser);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}