"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
const inspector_1 = require("inspector");
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        res.status(401).json({ message: 'Access Denied' });
        return;
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        inspector_1.console.log(decoded);
        let userId;
        if (typeof decoded === 'string') {
            userId = decoded;
        }
        else if (decoded && decoded.sub) {
            userId = decoded.sub;
        }
        if (!userId) {
            res.status(401).json({ message: 'Invalid token' });
        }
        User_1.default.findByPk(userId).then((user) => {
            if (user) {
                req.user = user;
                next();
            }
            else {
                res.status(401).json({ message: "User not found" });
            }
        });
        next();
    }
    catch (error) {
        inspector_1.console.log(error);
        res.status(401).json({ message: 'Invalid token' });
    }
};
exports.default = authenticateToken;
