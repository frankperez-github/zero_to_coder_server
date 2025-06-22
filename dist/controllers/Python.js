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
exports.runPythonCode = exports.executePython = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const child_process_1 = require("child_process");
const uuid_1 = require("uuid");
const TEMP_DIR = path_1.default.join(__dirname, '..', 'temp');
if (!fs_1.default.existsSync(TEMP_DIR))
    fs_1.default.mkdirSync(TEMP_DIR);
const executePython = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userCode = req.body.code;
    if (!userCode) {
        res.status(400).json({ error: 'No code provided.' });
        return;
    }
    try {
        const result = yield (0, exports.runPythonCode)(userCode);
        if (result.success) {
            res.status(200).json(result.output);
        }
        else {
            res.status(400).json(result.output);
        }
    }
    catch (err) {
        res.status(500).json({ error: 'Internal server error.', details: err.message });
    }
});
exports.executePython = executePython;
const runPythonCode = (code) => {
    return new Promise((resolve) => {
        const fileId = (0, uuid_1.v4)();
        const filePath = path_1.default.join(TEMP_DIR, `${fileId}.py`);
        try {
            fs_1.default.writeFileSync(filePath, code);
            const dockerCmd = `docker run --rm -v "${filePath}:/app/user_script.py:ro" --network=none --memory=100m --cpus=0.5 python-sandbox`;
            (0, child_process_1.exec)(dockerCmd, { timeout: 7000 }, (error, stdout, stderr) => {
                // Clean up the file regardless of the outcome
                fs_1.default.unlink(filePath, () => { });
                if (error) {
                    if (error.killed) {
                        resolve({
                            success: false,
                            output: { stdout, stderr: 'Execution timed out.', error: error.message }
                        });
                    }
                    else {
                        resolve({
                            success: false,
                            output: { stdout, stderr, error: error.message }
                        });
                    }
                }
                else {
                    resolve({
                        success: true,
                        output: { stdout, stderr }
                    });
                }
            });
        }
        catch (err) {
            resolve({
                success: false,
                output: { stdout: null, stderr: 'Internal server error.', details: err.message }
            });
        }
    });
};
exports.runPythonCode = runPythonCode;
