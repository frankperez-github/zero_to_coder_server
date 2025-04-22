import { Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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

export const getMyUser = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            res.status(401).json({ message: 'Token is required' });
            return
        }
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
        const userId = decoded.id;
        if (!userId) {
            res.status(401).json({ message: 'Invalid token' });
            return
        }
        const user = await User.findByPk(userId);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return
        }
        res.status(200).json(user);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}