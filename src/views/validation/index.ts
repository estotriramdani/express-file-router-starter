import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { fillParameters } from '@/utils';

export const get = async (req: Request, res: Response) => {
  const template = fs.readFileSync(path.join(__dirname, './template.html'), 'utf8');

  const html = fillParameters(template, {
    name: 'Validation',
    description: 'This is a validation page',
  });

  res.send(html);
};

export const post = async (req: Request, res: Response) => {
  const { name } = req.body;

  console.log(name);

  res.send({ name });
};
