import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/index';
import User from './User';
import Question from './Question';

class Test extends Model {
  public id!: number;
  public topic!: 'sintax' | 'logic';
  public difficulty!: number;
  public userId!: number; 

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Test.init(
  {
    id: { type: DataTypes.UUID, primaryKey: true, allowNull: false, defaultValue: DataTypes.UUIDV4 },
    type: { type: DataTypes.ENUM('sintax', 'logic'), allowNull: false },
    topic: { type: DataTypes.TEXT, allowNull: false },
    difficulty: { type: DataTypes.ENUM('easy', 'medium', 'hard'), allowNull: false},
  },
  {
    sequelize,
    modelName: 'Test',
    timestamps: true,
  }
);


export default Test;
