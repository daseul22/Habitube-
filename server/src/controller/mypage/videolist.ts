import { Request, Response } from 'express';
import { getManager } from 'typeorm';

export const videolist = {
  get: async (req: Request, res: Response) => {
    res.send();
  },
};
