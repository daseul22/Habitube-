import { Request, Response } from 'express';
import { getManager } from 'typeorm';

export const login = {
  post: async (req: Request, res: Response) => {
    res.send();
  },
};
