"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedQuestions = exports.sortByTopicsLength = exports.runTestCases = exports.getStartingPoints = exports.getNextTopicsQuestions = exports.getNextQuestions = exports.getQuestions = exports.createQuestion = void 0;
const Question_1 = __importDefault(require("../models/Question"));
const questions_1 = require("../seeds/questions");
const sequelize_1 = require("sequelize");
const QuestionsGraph_1 = require("./QuestionsGraph");
const Python_1 = require("./Python");
const User_1 = __importDefault(require("../models/User"));
const createQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const question = yield Question_1.default.create(req.body);
        res.status(201).json(question);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.createQuestion = createQuestion;
const getQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const questions = yield Question_1.default.findAll();
        res.status(200).json(questions);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getQuestions = getQuestions;
const getNextQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    try {
        const { questionId } = req.params;
        const { time } = req.body;
        const question = yield Question_1.default.findByPk(questionId);
        if (!question) {
            res.status(404).json({ message: `Question with id ${questionId} not found` });
            return;
        }
        const graph = yield (0, QuestionsGraph_1.getQuestionsGraph)();
        const edges = graph === null || graph === void 0 ? void 0 : graph.edges.filter((edge) => edge.from === questionId);
        const nextQuestions = edges === null || edges === void 0 ? void 0 : edges.map((edge) => edge.to);
        const questions = yield Question_1.default.findAll({
            where: {
                id: {
                    [sequelize_1.Op.in]: nextQuestions
                },
                topics: {
                    [sequelize_1.Op.not]: (_a = req.user) === null || _a === void 0 ? void 0 : _a.passedTopics // exclude exact matches
                }
            }
        });
        const user = yield User_1.default.findByPk((_b = req.user) === null || _b === void 0 ? void 0 : _b.id);
        // Updated passed topics if answered on time
        switch (question.difficulty) {
            case "easy":
                if (+time < 40)
                    user === null || user === void 0 ? void 0 : user.update({
                        passedTopics: [...user.passedTopics, ...question.topics]
                    });
                break;
            case "medium":
                if (+time < 120)
                    user === null || user === void 0 ? void 0 : user.update({
                        passedTopics: [...user.passedTopics, ...question.topics]
                    });
                break;
            case "hard":
                if (+time < 300)
                    user === null || user === void 0 ? void 0 : user.update({
                        passedTopics: [...user.passedTopics, ...question.topics]
                    });
                break;
        }
        // Mark question as done for this user
        if (question.doneByUsers == null || !question.doneByUsers.includes(((_c = req.user) === null || _c === void 0 ? void 0 : _c.id) + "")) {
            yield question.update({
                doneByUsers: [...(question.doneByUsers || []), (_d = req.user) === null || _d === void 0 ? void 0 : _d.id]
            });
        }
        questions.sort(exports.sortByTopicsLength);
        res.status(200).json(questions);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getNextQuestions = getNextQuestions;
const getNextTopicsQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { questionId } = req.params;
        const question = yield Question_1.default.findByPk(questionId);
        if (!question) {
            res.status(404).json({ message: `Question with id ${questionId} not found` });
            return;
        }
        const graph = yield (0, QuestionsGraph_1.getQuestionsGraph)();
        const edges = graph === null || graph === void 0 ? void 0 : graph.edges.filter((edge) => edge.from === questionId);
        const nextQuestions = edges === null || edges === void 0 ? void 0 : edges.map((edge) => edge.to);
        const questions = yield Question_1.default.findAll({
            where: {
                id: {
                    [sequelize_1.Op.in]: nextQuestions
                },
                topics: {
                    [sequelize_1.Op.not]: (_a = req.user) === null || _a === void 0 ? void 0 : _a.passedTopics // exclude exact matches
                }
            }
        });
        /* Remove all the questions with exactly same topics */
        const nextTopicsQuestions = (questions.filter((q) => !(q.topics.length === question.topics.length &&
            [...q.topics].sort().every((val, i) => val === [...question.topics].sort()[i])))).sort(exports.sortByTopicsLength);
        res.status(200).json(nextTopicsQuestions);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getNextTopicsQuestions = getNextTopicsQuestions;
const getStartingPoints = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const questions = yield Question_1.default.findAll();
        const graph = yield (0, QuestionsGraph_1.getQuestionsGraph)();
        const passedTopics = ((_a = req.user) === null || _a === void 0 ? void 0 : _a.passedTopics) || [];
        const startingPoints = [];
        for (const q of questions) {
            const entryEdges = (graph === null || graph === void 0 ? void 0 : graph.edges.filter((edge) => edge.to === q.id)) || [];
            let allEdgesFromSameTopics = true;
            for (const edge of entryEdges) {
                const sameTopics = yield haveSameTopics(edge.from, q.id);
                if (!sameTopics) {
                    allEdgesFromSameTopics = false;
                    break;
                }
            }
            const hasUnpassedTopics = q.topics.some(t => !passedTopics.includes(t));
            if (allEdgesFromSameTopics && hasUnpassedTopics) {
                startingPoints.push(q);
            }
        }
        res.status(200).json(startingPoints
            .sort((a, b) => (0, exports.sortByTopicsLength)(a, b)));
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getStartingPoints = getStartingPoints;
const runTestCases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { questionId } = req.params;
        const question = yield Question_1.default.findByPk(questionId);
        if (!question) {
            res.status(404).json({ error: "Question not found" });
            return;
        }
        const testCases = question.testCases;
        if (!testCases || testCases.length === 0) {
            res.status(400).json({ error: "No test cases available" });
            return;
        }
        const userCode = req.body.code;
        if (!userCode) {
            res.status(400).json({ error: "No code provided" });
            return;
        }
        // Process each test case
        const results = [];
        for (const testCase of testCases) {
            // Last element is the expected return value
            const expectedOutput = testCase[testCase.length - 1];
            // All elements except last are input parameters
            const inputParams = testCase.slice(0, -1);
            // Generate Python code with test case
            const testCode = generateTestCode(userCode, inputParams, expectedOutput);
            // Execute the test
            const result = yield (0, Python_1.runPythonCode)(testCode);
            if (result.output.stderr) {
                results.push({
                    input: inputParams,
                    expected: expectedOutput[1],
                    actual: null,
                    passed: false,
                    error: result.output.stderr
                });
                continue;
            }
            const testResult = checkOutput(result.output.stdout);
            results.push({
                input: inputParams,
                expected: expectedOutput[1],
                actual: testResult.actual,
                passed: testResult.passed,
                error: testResult.error
            });
        }
        res.status(200).json({
            success: true,
            results: results.slice(0, Math.max(4, results.length)), // Limit to 4 results
            passedCount: results.filter(r => r.passed).length,
            totalCount: results.length
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.runTestCases = runTestCases;
function generateTestCode(userCode, inputParams, expectedOutput, functionName = "Solution") {
    const args = inputParams.map(([type, value]) => {
        if (type === 'str')
            return `"${value}"`;
        return value;
    }).join(', ');
    // Convert expected value to proper Python literal
    let expectedValue;
    const [expectedType, expectedVal] = expectedOutput;
    if (expectedType === 'str') {
        expectedValue = `"${expectedVal}"`;
    }
    else {
        expectedValue = expectedVal;
    }
    return `
${userCode}
if __name__ == "__main__":
    # Test execution
    try:
        actual_result = ${functionName}(${args})
        expected_result = ${expectedValue}
        
        if actual_result == expected_result:
            print(f"<RESULT>PASS</RESULT>")
            print(f"<ACTUAL>{actual_result}</ACTUAL>")
            print(f"<EXPECTED>{expected_result}</EXPECTED>")
        else:
            print(f"<RESULT>FAIL</RESULT>")
            print(f"<ACTUAL>{actual_result}</ACTUAL>")
            print(f"<EXPECTED>{expected_result}</EXPECTED>")
            print(f"<ERROR>Expected {expected_result} but got {actual_result}</ERROR>")
    except Exception as e:
        print(f"<RESULT>ERROR</RESULT>")
        print(f"<ERROR>{str(e)}</ERROR>")
`;
}
function checkOutput(actualOutput) {
    const resultMatch = actualOutput.match(/<RESULT>(.*?)<\/RESULT>/);
    const actualMatch = actualOutput.match(/<ACTUAL>(.*?)<\/ACTUAL>/);
    const expectedMatch = actualOutput.match(/<EXPECTED>(.*?)<\/EXPECTED>/);
    const errorMatch = actualOutput.match(/<ERROR>(.*?)<\/ERROR>/);
    if (!resultMatch) {
        return { passed: false, error: "Invalid output format" };
    }
    const result = resultMatch[1];
    if (result === 'PASS') {
        return {
            passed: true,
            actual: actualMatch === null || actualMatch === void 0 ? void 0 : actualMatch[1],
            expected: expectedMatch === null || expectedMatch === void 0 ? void 0 : expectedMatch[1]
        };
    }
    else if (result === 'FAIL') {
        return {
            passed: false,
            actual: actualMatch === null || actualMatch === void 0 ? void 0 : actualMatch[1],
            expected: expectedMatch === null || expectedMatch === void 0 ? void 0 : expectedMatch[1],
            error: (errorMatch === null || errorMatch === void 0 ? void 0 : errorMatch[1]) || "Test failed"
        };
    }
    else {
        return {
            passed: false,
            error: (errorMatch === null || errorMatch === void 0 ? void 0 : errorMatch[1]) || "Runtime error"
        };
    }
}
const haveSameTopics = (qId1, qId2) => __awaiter(void 0, void 0, void 0, function* () {
    const q1 = yield Question_1.default.findByPk(qId1);
    const q2 = yield Question_1.default.findByPk(qId2);
    /* q1 and q2 have exactly same topics */
    return (q1 === null || q1 === void 0 ? void 0 : q1.topics.every((topic) => q2 === null || q2 === void 0 ? void 0 : q2.topics.includes(topic)))
        && (q2 === null || q2 === void 0 ? void 0 : q2.topics.every((topic) => q1 === null || q1 === void 0 ? void 0 : q1.topics.includes(topic)));
});
const sortByTopicsLength = (a, b) => {
    const aTopics = a.topics.length;
    const bTopics = b.topics.length;
    if (aTopics < bTopics) {
        return -1;
    }
    if (aTopics > bTopics) {
        return 1;
    }
    return 0;
};
exports.sortByTopicsLength = sortByTopicsLength;
const seedQuestions = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Map the question data to match the model structure
        const formattedQuestions = questions_1.questions.map(q => (Object.assign({}, q)));
        formattedQuestions.map((question) => __awaiter(void 0, void 0, void 0, function* () {
            const questionExists = (yield Question_1.default.findAll({ where: {
                    type: question.type,
                    topics: question.topics,
                    options: question.options || [],
                    answer: question.answer || "",
                    testCases: question.testCases || [],
                    solutionSignature: question.solutionSignature,
                    hint: question.hint,
                    difficulty: question.difficulty,
                    explanation: question.explanation,
                    text: question.text
                } })).length > 0;
            if (questionExists)
                return;
            yield Question_1.default.create(question);
        }));
        console.log('✅ Successfully seeded questions!');
        return;
    }
    catch (error) {
        console.error('Error seeding questions:', error);
        return;
    }
});
exports.seedQuestions = seedQuestions;
