"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = require("../database/index");
const validTopics_1 = require("../types/validTopics");
class Question extends sequelize_1.Model {
}
Question.init({
    id: { type: sequelize_1.DataTypes.UUID, primaryKey: true, allowNull: false, defaultValue: sequelize_1.DataTypes.UUIDV4 },
    type: { type: sequelize_1.DataTypes.ENUM('sintax', 'logic'), allowNull: false },
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
    hint: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    difficulty: { type: sequelize_1.DataTypes.ENUM('easy', 'medium', 'hard'), allowNull: false },
    explanation: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    text: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
}, {
    sequelize: index_1.sequelize,
    modelName: 'Question',
    timestamps: true,
});
exports.default = Question;
