import { Request, Response } from 'express';
import { getManager } from 'typeorm';

export const signout = {
  post: async (req: Request, res: Response) => {
    res.send();
  },
};
