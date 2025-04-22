"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Tests_1 = require("../controllers/Tests");
const router = express_1.default.Router();
router.post('/', Tests_1.createTest);
router.get('/', Tests_1.getTests);
exports.default = router;
