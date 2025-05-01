import { Request, Response } from 'express';
import Question from '../models/Question';
import { questions } from '../seeds/questions';
import { Op } from 'sequelize';
import { getQuestionsGraph } from './QuestionsGraph';
import UserRequest from '../types/userRequest';
import { TopicType } from '../types/validTopics';

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

export const markQuestionAsDone = async (req: UserRequest, res: Response) => {
    try {
        const { questionId } = req.params;
        const question = await Question.findByPk(questionId);
        if (!question) {
            res.status(404).json({ message: `Question with id ${questionId} not found` });
            return
        }
        if(question.doneByUsers && !question.doneByUsers.includes(req.user?.id+""))
        {
            await question.update({
                doneByUsers: [...(question.doneByUsers || []), req.user?.id]
            });
        }
        res.status(200).json(question);

    } catch (error: any) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}


export const getNextQuestions = async (req: UserRequest, res: Response) => {
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
        type: q.type,
        topics: q.topics,
        difficulty: q.difficulty,
        text: q.text,
        options: q.options,
        answer: q.answer,
        hint: q.hint,
        explanation: q.explanation
    }));

    // Bulk create the questions
    await Question.bulkCreate(formattedQuestions);
    
    console.log('✅ Successfully seeded questions!');
    return
  } catch (error) {
    console.error('Error seeding questions:', error);
    return
  }
}
