"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = require("../database/index");
class User extends sequelize_1.Model {
}
User.init({
    id: { type: sequelize_1.DataTypes.UUID, primaryKey: true, allowNull: false, defaultValue: sequelize_1.DataTypes.UUIDV4 },
    name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    sintax_level: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    logic_level: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    role: { type: sequelize_1.DataTypes.STRING, allowNull: false, defaultValue: 'user' },
    email: { type: sequelize_1.DataTypes.STRING, allowNull: false, unique: true },
    password: { type: sequelize_1.DataTypes.STRING, allowNull: false },
}, {
    sequelize: index_1.sequelize,
    modelName: 'User',
});
exports.default = User;
