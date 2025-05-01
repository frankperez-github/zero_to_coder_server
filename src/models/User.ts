import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/index'; 
import { allowedTopics, TopicType } from '../types/validTopics';

class User extends Model {
    public id!: number;
    public name!: string;
    public passedTopics!: TopicType[];
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
    passedTopics: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: [],
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
