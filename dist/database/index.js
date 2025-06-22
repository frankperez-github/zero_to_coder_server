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
exports.disconnect = exports.connect = exports.createDatabaseIfNotExists = exports.connection = exports.sequelize = void 0;
require("dotenv/config");
const promise_1 = __importDefault(require("mysql2/promise"));
const sequelize_1 = require("sequelize");
const MYSQL_URI = `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`;
exports.sequelize = new sequelize_1.Sequelize(MYSQL_URI, {
    dialect: 'mysql',
    protocol: 'mysql',
    logging: false,
});
exports.connection = {
    isConnected: 0,
    sequelize: null,
};
const databaseName = process.env.DB_NAME;
const createDatabaseIfNotExists = () => __awaiter(void 0, void 0, void 0, function* () {
    const mysqlConfig = {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    };
    try {
        const connection = yield promise_1.default.createConnection(mysqlConfig);
        yield connection.query(`CREATE DATABASE IF NOT EXISTS \`${databaseName}\`;`);
        console.log(`Database "${databaseName}" verified/created.`);
        yield connection.end();
    }
    catch (error) {
        console.error("Error creating/verifying the database:", error);
        throw error;
    }
});
exports.createDatabaseIfNotExists = createDatabaseIfNotExists;
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    if (exports.connection.isConnected) {
        return exports.connection.sequelize;
    }
    if (!MYSQL_URI || !databaseName) {
        throw new Error('Please define the DB_HOST and DB_NAME environment variables inside .env');
    }
    yield (0, exports.createDatabaseIfNotExists)();
    try {
        yield exports.sequelize.authenticate();
        console.log('Connected to MySQL');
        yield exports.sequelize.sync({ alter: false });
        console.log('Models synchronized');
        exports.connection.isConnected = 1;
        exports.connection.sequelize = exports.sequelize;
        return exports.sequelize;
    }
    catch (error) {
        console.error('Error connecting to MySQL:', error);
        throw new Error('Failed to connect to the MySQL database');
    }
});
exports.connect = connect;
const disconnect = () => __awaiter(void 0, void 0, void 0, function* () {
    if (exports.connection.isConnected === 0 || !exports.connection.sequelize)
        return;
    try {
        yield exports.sequelize.close();
        console.log('Disconnected from MySQL');
    }
    catch (error) {
        console.error('Error disconnecting from MySQL:', error);
    }
    exports.connection.isConnected = 0;
    exports.connection.sequelize = null;
});
exports.disconnect = disconnect;
