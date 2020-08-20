import { Request, Response } from 'express';
import { getManager } from 'typeorm';

export async function login(req: Request, res: Response) {
  res.send('ok');
}
