"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = require("../database/index");
const validTopics_1 = require("../types/validTopics");
const User_1 = __importDefault(require("./User"));
class Question extends sequelize_1.Model {
}
Question.init({
    id: { type: sequelize_1.DataTypes.UUID, primaryKey: true, allowNull: false, defaultValue: sequelize_1.DataTypes.UUIDV4 },
    type: { type: sequelize_1.DataTypes.ENUM('syntax', 'logic'), allowNull: false },
    topics: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
        validate: {
            isValidTopicArray(value) {
                if (!Array.isArray(value)) {
                    throw new Error('Topics must be an array');
                }
                for (const topic of value) {
                    if (!validTopics_1.allowedTopics.includes(topic)) {
                        throw new Error(`Invalid topic: ${topic}`);
                    }
                }
            }
        }
    },
    options: { type: sequelize_1.DataTypes.JSON, allowNull: false },
    answer: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    testCases: { type: sequelize_1.DataTypes.JSON, allowNull: false, defaultValue: [] },
    hint: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    difficulty: { type: sequelize_1.DataTypes.ENUM('easy', 'medium', 'hard'), allowNull: false },
    explanation: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    text: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    doneByUsers: {
        type: sequelize_1.DataTypes.JSON,
        validate: {
            isValidUserId(value) {
                return Promise.all(value.map(id => User_1.default.findByPk(id)));
            }
        }
    }
}, {
    sequelize: index_1.sequelize,
    modelName: 'Question',
    timestamps: true,
});
exports.default = Question;
