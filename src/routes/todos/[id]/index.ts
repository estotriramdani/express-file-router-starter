import { main_db } from '@/lib/db';
import { printTimestamp } from '@/middlewares/printTimestamp';
import { CustomRequest } from '@/types';
import { Request, Response } from 'express';

export const get = async (req: Request, res: Response) => {
  const todo = await main_db.tr_todo.findFirst({
    where: {
      deleted_at: null,
      id: parseInt(req.params.id),
    },
  });

  res.status(200).json({
    status: true,
    data: todo,
  });
};

export const put = [
  printTimestamp,
  async (req: CustomRequest, res: Response) => {
    const { title, category_id, description, progress } = req.body;
    const id = parseInt(req.params.id);

    console.log('Ini dari PUT: ', req.user)

    const isExist = await main_db.tr_todo.findFirst({
      where: {
        id: id,
        deleted_at: null,
      },
    });

    if (!isExist) {
      return res.status(404).json({
        status: false,
        message: 'Item is not found',
      });
    }

    const todo = await main_db.tr_todo.update({
      where: {
        id: id,
      },
      data: {
        title,
        category_id,
        description,
        progress,
      },
    });

    return res.status(203).json({
      status: true,
      data: todo,
    });
  },
];

export const del = [
  printTimestamp,
  async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const todo = await main_db.tr_todo.update({
      where: {
        id: id,
      },
      data: {
        deleted_at: new Date(),
      },
    });

    return res.status(200).json({
      status: true,
      data: todo,
    });
  },
];
