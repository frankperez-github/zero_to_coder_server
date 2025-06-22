"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middlewares/auth");
const QuestionsGraph_1 = require("../controllers/QuestionsGraph");
const router = express_1.default.Router();
router.get('/', auth_1.authMiddleware, QuestionsGraph_1.getQuestionsGraphData);
exports.default = router;
