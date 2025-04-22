import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/index'; 

export type TopicType =
  | 'basic_syntax'
  | 'data_types'
  | 'accumulators'
  | 'counters'
  | 'operators'
  | 'variables'
  | 'constants'
  | 'input_output'
  | 'comments'
  | 'conditionals'
  | 'loops'
  | 'error_handling'
  | 'control_statements'
  | 'arrays'
  | 'linked_lists'
  | 'stacks_and_queues'
  | 'sets'
  | 'dictionaries_maps_objects'
  | 'trees_and_graphs'
  | 'matrices'
  | 'function_definition_and_usage'
  | 'recursion'
  | 'pass_by_value_or_reference'
  | 'higher_order_functions'
  | 'closures'
  | 'structured_programming'
  | 'object_oriented_programming'
  | 'classes_and_objects'
  | 'inheritance'
  | 'polymorphism'
  | 'encapsulation'
  | 'functional_programming'
  | 'immutability'
  | 'map_filter_reduce'
  | 'declarative_programming'
  | 'reactive_programming'
  | 'search_algorithms'
  | 'sorting_algorithms'
  | 'data_structure_traversal'
  | 'greedy_algorithms'
  | 'dynamic_programming'
  | 'backtracking'
  | 'file_reading_and_writing'
  | 'json_xml_csv_handling'
  | 'serialization_deserialization'
  | 'callbacks'
  | 'promises_async_await'
  | 'threads_and_processes'
  | 'synchronization_handling';

const allowedTopics: TopicType[] = [
  'basic_syntax',
  'data_types',
  'accumulators',
  'counters',
  'operators',
  'variables',
  'constants',
  'input_output',
  'comments',
  'conditionals',
  'loops',
  'error_handling',
  'control_statements',
  'arrays',
  'linked_lists',
  'stacks_and_queues',
  'sets',
  'dictionaries_maps_objects',
  'trees_and_graphs',
  'matrices',
  'function_definition_and_usage',
  'recursion',
  'pass_by_value_or_reference',
  'higher_order_functions',
  'closures',
  'structured_programming',
  'object_oriented_programming',
  'classes_and_objects',
  'inheritance',
  'polymorphism',
  'encapsulation',
  'functional_programming',
  'immutability',
  'map_filter_reduce',
  'declarative_programming',
  'reactive_programming',
  'search_algorithms',
  'sorting_algorithms',
  'data_structure_traversal',
  'greedy_algorithms',
  'dynamic_programming',
  'backtracking',
  'file_reading_and_writing',
  'json_xml_csv_handling',
  'serialization_deserialization',
  'callbacks',
  'promises_async_await',
  'threads_and_processes',
  'synchronization_handling',
];

class Question extends Model {
  public id!: number;
  public difficulty!: 'easy' | 'medium' | 'hard';
  public type!: 'sintax' | 'logic';
  public topics!: TopicType[];
  public reward!: number;
  public text!: string;
  public options!: any;
  public answer!: string;
  public hint!: string;
  public explanation!: string;

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
    reward: { type: DataTypes.INTEGER, allowNull: false },
    explanation: { type: DataTypes.TEXT, allowNull: false },
    text: { type: DataTypes.TEXT, allowNull: false },
  },
  {
    sequelize,
    modelName: 'Question',
    timestamps: true,
  }
);

export default Question;
