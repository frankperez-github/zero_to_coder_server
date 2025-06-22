import { Request, Response } from 'express';
import Question from '../models/Question';
import { questions } from '../seeds/questions';
import { Op } from 'sequelize';
import { getQuestionsGraph } from './QuestionsGraph';
import UserRequest from '../types/userRequest';
import { TopicType } from '../types/validTopics';
import { runPythonCode } from './Python';
import User from '../models/User';

export const createQuestion = async (req: Request, res: Response) => {
  try {
    const question = await Question.create(req.body);
    res.status(201).json(question);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};
export const getQuestions = async (req: Request, res: Response) => {
  try {
    const questions = await Question.findAll();
    res.status(200).json(questions);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};


export const getNextQuestions = async (req: UserRequest, res: Response) => {
    try {
        const { questionId } = req.params;
        const { time } = req.body;
        const question = await Question.findByPk(questionId);
        if (!question) {
            res.status(404).json({ message: `Question with id ${questionId} not found` });
            return
        }
        const graph = await getQuestionsGraph()
        const edges = graph?.edges.filter((edge) => edge.from === questionId);
        const nextQuestions = edges?.map((edge) => edge.to);
        const questions = await Question.findAll({
            where: {
              id: {
                [Op.in]: nextQuestions
              },
              topics: {
                [Op.not]: req.user?.passedTopics  // exclude exact matches
              }
            }
        });
        const user = await User.findByPk(req.user?.id)
        // Updated passed topics if answered on time
        switch (question.difficulty) {
            case "easy":
                if (+time < 40)
                    user?.update({
                        passedTopics: [...user.passedTopics, ...question.topics]    
                    })
                break
            case "medium":
                if (+time < 120)
                    user?.update({
                        passedTopics: [...user.passedTopics, ...question.topics]    
                    })
                break;
            case "hard":
                if (+time < 300)
                    user?.update({
                        passedTopics: [...user.passedTopics, ...question.topics]    
                    })
                break;
        }
        // Mark question as done for this user
        if(question.doneByUsers == null || !question.doneByUsers.includes(req.user?.id+""))
        {
            await question.update({
                doneByUsers: [...(question.doneByUsers || []), req.user?.id]
            });
        }

        questions.sort(sortByTopicsLength)
        res.status(200).json(questions);
  } catch (error:any) {
        res.status(500).json({ error: error.message });
  }
}

export const getNextTopicsQuestions = async (req: UserRequest, res: Response) => {
    try {
        const { questionId } = req.params;
        const question = await Question.findByPk(questionId);
        if (!question) {
            res.status(404).json({ message: `Question with id ${questionId} not found` });
            return
        }
        const graph = await getQuestionsGraph()
        const edges = graph?.edges.filter((edge) => edge.from === questionId);
        const nextQuestions = edges?.map((edge) => edge.to);
        const questions = await Question.findAll({
            where: {
              id: {
                [Op.in]: nextQuestions
              },
              topics: {
                [Op.not]: req.user?.passedTopics  // exclude exact matches
              }
            }
          });
        /* Remove all the questions with exactly same topics */
        const nextTopicsQuestions = (questions.filter( (q:Question) => 
            !(q.topics.length === question.topics.length &&
            [...q.topics].sort().every((val, i) => val === [...question.topics].sort()[i]))
        )).sort(sortByTopicsLength);
        
        res.status(200).json(nextTopicsQuestions);
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
}

export const getStartingPoints = async (req: UserRequest, res: Response) => {
    try {
        const questions = await Question.findAll();
        const graph = await getQuestionsGraph();
        const passedTopics = req.user?.passedTopics || [];

        const startingPoints: Question[] = [];

        for (const q of questions) {
            const entryEdges = graph?.edges.filter((edge) => edge.to === q.id) || [];

            let allEdgesFromSameTopics = true;

            for (const edge of entryEdges) {
                const sameTopics = await haveSameTopics(edge.from, q.id);
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

        res.status(200).json(
            startingPoints
                .sort((a, b) => sortByTopicsLength(a, b))
        );
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const runTestCases = async (req: UserRequest, res: Response) => {
    try {
        const { questionId } = req.params;
        const question = await Question.findByPk(questionId);
        
        if (!question) {
            res.status(404).json({ error: "Question not found" });
            return
        }

        const testCases = question.testCases;
        
        if (!testCases || testCases.length === 0) {
            res.status(400).json({ error: "No test cases available" });
            return
        }

        const userCode = req.body.code;
        if (!userCode) {
            res.status(400).json({ error: "No code provided" });
            return
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
            const result = await runPythonCode(testCode);
            if(result.output.stderr) {
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

    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

function generateTestCode(userCode: string, inputParams: [string, string][], expectedOutput: [string, string], functionName: string = "Solution"): string {
    const args = inputParams.map(([type, value]) => {
        if (type === 'str') return `"${value}"`;
        return value;
    }).join(', ');

    // Convert expected value to proper Python literal
    let expectedValue;
    const [expectedType, expectedVal] = expectedOutput;
    if (expectedType === 'str') {
        expectedValue = `"${expectedVal}"`;
    } else {
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

function checkOutput(actualOutput: string): { passed: boolean, actual?: string, expected?: string, error?: string } {
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
            actual: actualMatch?.[1],
            expected: expectedMatch?.[1]
        };
    }
    else if (result === 'FAIL') {
        return {
            passed: false,
            actual: actualMatch?.[1],
            expected: expectedMatch?.[1],
            error: errorMatch?.[1] || "Test failed"
        };
    }
    else {
        return {
            passed: false,
            error: errorMatch?.[1] || "Runtime error"
        };
    }
}


const haveSameTopics = async (qId1:string, qId2:string) =>{
    const q1 = await Question.findByPk(qId1)
    const q2 = await Question.findByPk(qId2)

    /* q1 and q2 have exactly same topics */
    return q1?.topics.every((topic: TopicType) => q2?.topics.includes(topic)) 
        && q2?.topics.every((topic: TopicType) => q1?.topics.includes(topic))
}

export const sortByTopicsLength = (a: Question, b: Question) => {
    const aTopics = a.topics.length;
    const bTopics = b.topics.length;
    if (aTopics < bTopics) {
        return -1;
    }
    if (aTopics > bTopics) {
        return 1;
    }
    return 0;
}


export const seedQuestions = async () => {
  try {
    // Map the question data to match the model structure
    const formattedQuestions = questions.map(q => ({
        ...q
    }));

    formattedQuestions.map(async (question)=>{
        const questionExists = (await Question.findAll({where: {
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
        }})).length > 0

        if(questionExists)
            return
        
        await Question.create(question);
    })

    console.log('✅ Successfully seeded questions!');
    return
  } catch (error) {
    console.error('Error seeding questions:', error);
    return
  }
}
