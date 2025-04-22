import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/index'; 
import Test from './Test';

class User extends Model {
  public id!: number;
  public name!: string;
  public sintax_level!: number;
  public logic_level!: number;
  public role!: string;
  public email!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: { type: DataTypes.UUID, primaryKey: true, allowNull: false, defaultValue: DataTypes.UUIDV4 },
    name: { type: DataTypes.STRING, allowNull: false },
    sintax_level: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    logic_level: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    role: { type: DataTypes.STRING, allowNull: false, defaultValue: 'user' },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    modelName: 'User',
  }
);


export default User;
