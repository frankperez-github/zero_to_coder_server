import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import User from '../models/User';
import UserRequest from '../types/userRequest';

export const authMiddleware = async (req: UserRequest, res: Response, next: NextFunction): Promise<void> => {
    const token = req.header('Authorization');
    if (!token) {
        res.status(403).json({ message: 'Access Denied' });
        return;
    }

    try {
        const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET as string);

        const userId = typeof decoded === 'string'
            ? decoded
            : (decoded as JwtPayload).id;

        if (!userId) {
            res.status(403).json({ message: "Invalid token" });
            return;
        }

        const user = await User.findByPk(userId);

        if (!user) {
            res.status(403).json({ message: "User not found" });
            return;
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid token" });
    }
};
