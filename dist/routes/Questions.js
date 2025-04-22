"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Questions_1 = require("../controllers/Questions");
const router = express_1.default.Router();
router.post('/', Questions_1.createQuestion);
router.get('/', Questions_1.getQuestions);
exports.default = router;
