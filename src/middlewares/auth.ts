import { Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import User from '../models/User';
import UserRequest from '../types/userRequest';

const authenticateToken = (req: UserRequest, res: Response, next: NextFunction): void => {
    const token = req.header('Authorization');
    if (!token){
        res.status(401).json({ message: 'Access Denied' });
        return
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
      
        let userId: string | undefined;
      
        if (typeof decoded === 'string') {
          userId = decoded;
        } else if (decoded && (decoded as JwtPayload).sub) {
          userId = (decoded as JwtPayload).sub as string;
        }
      
        if (!userId) {
            res.status(401).json({ message: 'Invalid token' });
        }
      
        User.findByPk(userId).then((user) => {
          if (user) {
            req.user = user;
            next();
          } else {
            res.status(401).json({ message: "User not found" });
          }
        });

        next();
      } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
      }
};

export default authenticateToken;
