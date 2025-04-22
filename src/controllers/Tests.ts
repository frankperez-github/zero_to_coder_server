import { Request, Response } from 'express';
import Test from '../models/Test';

export const createTest = async (req: Request, res: Response) => {
  try {
    const test = await Test.create(req.body);
    res.status(201).json(test);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};
export const getTests = async (req: Request, res: Response) => {
  try {
    const tests = await Test.findAll();
    res.json(tests);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};