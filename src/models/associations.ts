import Question from "./Question";
import Test from "./Test";
import User from "./User";

Question.belongsToMany(Test, { through: 'TestQuestions' });
Test.belongsTo(User, { foreignKey: 'userId' });
Test.belongsToMany(Question, { through: 'TestQuestions' });
User.hasMany(Test, { foreignKey: 'userId' });
