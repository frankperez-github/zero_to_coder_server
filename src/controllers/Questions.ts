import { Request, Response } from 'express';
import Question from '../models/Question';
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
    res.json(questions);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};