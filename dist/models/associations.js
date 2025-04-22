"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Question_1 = __importDefault(require("./Question"));
const Test_1 = __importDefault(require("./Test"));
const User_1 = __importDefault(require("./User"));
Question_1.default.belongsToMany(Test_1.default, { through: 'TestQuestions' });
Test_1.default.belongsTo(User_1.default, { foreignKey: 'userId' });
Test_1.default.belongsToMany(Question_1.default, { through: 'TestQuestions' });
User_1.default.hasMany(Test_1.default, { foreignKey: 'userId' });
