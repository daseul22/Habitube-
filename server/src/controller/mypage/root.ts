import { Request, Response } from 'express';
import { getManager } from 'typeorm';

export async function root(req: Request, res: Response) {
  res.send('okkk');
}
