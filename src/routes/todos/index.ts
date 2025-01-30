import { main_db } from '@/lib/db';
import { printTimestamp } from '@/middlewares/printTimestamp';
import { CustomRequest } from '@/types';
import { Request, Response } from 'express';

export const get = async (req: Request, res: Response) => {
  const todos = await main_db.tr_todo.findMany({
    where: {
      deleted_at: {
        not: null,
      },
    },
  });

  res.status(200).json({
    status: true,
    data: todos,
  });
};

export const post = [
  printTimestamp,
  async (req: CustomRequest, res: Response) => {
    const { title, category_id, description, progress = 0 } = req.body;
    const created_by = req.user.name;

    const todo = await main_db.tr_todo.create({
      data: {
        title: title,
        created_by: created_by,
        category_id: category_id,
        description: description,
        progress: progress,
      },
    });

    // Normally, you would save this user to a database
    res.status(201).json({
      status: true,
      data: todo,
    });
  },
];
