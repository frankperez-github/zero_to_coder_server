"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = require("../database/index");
class Test extends sequelize_1.Model {
}
Test.init({
    id: { type: sequelize_1.DataTypes.UUID, primaryKey: true, allowNull: false, defaultValue: sequelize_1.DataTypes.UUIDV4 },
    type: { type: sequelize_1.DataTypes.ENUM('sintax', 'logic'), allowNull: false },
    topic: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    difficulty: { type: sequelize_1.DataTypes.ENUM('easy', 'medium', 'hard'), allowNull: false },
}, {
    sequelize: index_1.sequelize,
    modelName: 'Test',
    timestamps: true,
});
exports.default = Test;
