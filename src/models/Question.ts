import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/index'; 
import { allowedTopics, TopicType } from '../types/validTopics';
import User from './User';



class Question extends Model {
  public id!: string;
  public difficulty!: 'easy' | 'medium' | 'hard';
  public type!: 'sintax' | 'logic';
  public topics!: TopicType[];
  public text!: string;
  public options!: any;
  public answer!: string;
  public hint!: string;
  public explanation!: string;
  public doneByUsers!: string[]

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Question.init(
  {
    id: { type: DataTypes.UUID, primaryKey: true, allowNull: false, defaultValue: DataTypes.UUIDV4 },

    type: { type: DataTypes.ENUM('sintax', 'logic'), allowNull: false },

    topics: {
      type: DataTypes.JSON,
      allowNull: false,
      validate: {
        isValidTopicArray(value: any) {
          if (!Array.isArray(value)) {
            throw new Error('Topics must be an array');
          }

          for (const topic of value) {
            if (!allowedTopics.includes(topic)) {
              throw new Error(`Invalid topic: ${topic}`);
            }
          }
        }
      }
    },

    options: { type: DataTypes.JSON, allowNull: false },
    answer: { type: DataTypes.TEXT, allowNull: false },
    hint: { type: DataTypes.TEXT, allowNull: false },
    difficulty: { type: DataTypes.ENUM('easy', 'medium', 'hard'), allowNull: false },
    explanation: { type: DataTypes.TEXT, allowNull: false },
    text: { type: DataTypes.TEXT, allowNull: false },
    doneByUsers: {
        type: DataTypes.JSON,
        validate: {
            isValidUserId(value: string[]) {
                return Promise.all(value.map(id => User.findByPk(id)));
            }
        }
    }
  },
  {
    sequelize,
    modelName: 'Question',
    timestamps: true,
  }
);

export default Question;
