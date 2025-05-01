"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = require("../database/index");
const validTopics_1 = require("../types/validTopics");
class User extends sequelize_1.Model {
}
User.init({
    id: { type: sequelize_1.DataTypes.UUID, primaryKey: true, allowNull: false, defaultValue: sequelize_1.DataTypes.UUIDV4 },
    name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    passedTopics: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
        defaultValue: [],
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
    role: { type: sequelize_1.DataTypes.STRING, allowNull: false, defaultValue: 'user' },
    email: { type: sequelize_1.DataTypes.STRING, allowNull: false, unique: true },
    password: { type: sequelize_1.DataTypes.STRING, allowNull: false },
}, {
    sequelize: index_1.sequelize,
    modelName: 'User',
});
exports.default = User;
