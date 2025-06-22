"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPassedTopics = exports.addPassedTopic = exports.getMyUser = exports.login = exports.register = void 0;
const User_1 = __importDefault(require("../models/User"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, name } = req.body;
        if (!email || !password) {
            res.status(400).json({ message: 'Email and password are required' });
            return;
        }
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const user = yield User_1.default.create({ email, name, password: hashedPassword });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield User_1.default.findOne({ where: { email } });
        if (!user || !(yield bcryptjs_1.default.compare(password, user.password))) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.login = login;
const getMyUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json(req.user);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getMyUser = getMyUser;
const addPassedTopic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        const updatedUser = yield (user === null || user === void 0 ? void 0 : user.update(Object.assign(Object.assign({}, user), { passedTopics: [...user === null || user === void 0 ? void 0 : user.passedTopics, req.body.topic] })));
        updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser.save();
        res.status(200).json(updatedUser);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.addPassedTopic = addPassedTopic;
const getPassedTopics = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json({ topics: user.passedTopics });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getPassedTopics = getPassedTopics;
