import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';


export const get = async (req: Request, res: Response) => {
  const template = fs.readFileSync(path.join(__dirname, '../email/bodyEmailRequestValidation.html'), 'utf8');
  const html = template.replace('{{name}}', 'John Doe');
  
  res.send(html);
}