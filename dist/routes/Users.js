"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Users_1 = require("../controllers/Users");
const router = express_1.default.Router();
router.post('/register', Users_1.register);
router.post('/login', Users_1.login);
router.get('/me', Users_1.getMyUser);
router.post('/me/topic', Users_1.addPassedTopic);
exports.default = router;
