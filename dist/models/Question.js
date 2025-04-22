"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = require("../database/index");
const allowedTopics = [
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
                    if (!allowedTopics.includes(topic)) {
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
    reward: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    explanation: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    text: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
}, {
    sequelize: index_1.sequelize,
    modelName: 'Question',
    timestamps: true,
});
exports.default = Question;
