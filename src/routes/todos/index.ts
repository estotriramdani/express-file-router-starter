import { main_db } from '@/lib/db';
import { printTimestamp } from '@/middlewares/printTimestamp';
import { CustomRequest } from '@/types';
import { Request, Response } from 'express';

export const get = async (req: Request, res: Response) => {
  try {
    const todos = await main_db.tr_todo.findMany({
      where: {
        deleted_at: null,
      },
    });

    res.status(200).json({
      status: true,
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error,
      message: error?.message || 'Something went wrong',
    });
  }
};

export const post = [
  printTimestamp,
  async (req: CustomRequest, res: Response) => {
    try {
      const { title, category_id, description, progress = 0 } = req.body;
      const created_by = req.user.username;

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
    } catch (error) {
      res.status(500).json({
        status: false,
        error: error,
        message: error?.message || 'Something went wrong',
      });
    }
  },
];
