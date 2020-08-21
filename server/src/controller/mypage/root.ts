import { Request, Response } from 'express';
import { getManager } from 'typeorm';

export const root = {
  get: async (req: Request, res: Response) => {
    res.send();
  },
};
