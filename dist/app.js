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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const database_1 = require("./database");
const Users_1 = __importDefault(require("./routes/Users"));
const Tests_1 = __importDefault(require("./routes/Tests"));
const Questions_1 = __importDefault(require("./routes/Questions"));
const auth_1 = __importDefault(require("./middlewares/auth"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000, https://zero-to-coder-three.vercel.app/',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
// Routes
app.use('/api/users', Users_1.default);
app.use('/api/tests', auth_1.default, Tests_1.default);
app.use('/api/questions', auth_1.default, Questions_1.default);
// Sync Database & Start Server
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV === "production") {
    const httpsServer = https_1.default.createServer({
        key: fs_1.default.readFileSync(process.env.SSL_KEY_PATH),
        cert: fs_1.default.readFileSync(process.env.SSL_CERT_PATH),
    }, app);
    httpsServer.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    }).on('error', (err) => {
        console.error('Error starting the server:', err);
    });
}
else {
    (() => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, database_1.connect)();
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    }))();
}
