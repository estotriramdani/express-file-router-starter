import { Request, Response } from 'express';

// GET `/users` 
export const get = (req: Request, res: Response) => {
  const users = [
    { id: 1, name: 'Name1' },
    { id: 2, name: 'Name2' },
  ];
  res.json(users);
};

export const post = (req: Request, res: Response) => {
  const newUser = {
    id: Date.now(),
    name: req.body.name,
  };
  // Normally, you would save this user to a database
  res.status(201).json(newUser);
};