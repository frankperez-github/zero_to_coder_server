"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Python_1 = require("../controllers/Python");
const auth_1 = require("../middlewares/auth");
const router = (0, express_1.Router)();
router.post('/execute', auth_1.authMiddleware, Python_1.executePython);
exports.default = router;
