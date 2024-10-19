import { db1 } from '@/utils/db1';
import type { Request, Response } from 'express';

export const post = async (req: Request, res: Response) => {
  try {
    const data = await db1.mst_category.create({
      data: req.body,
    });
    res.status(200).send({ status: true, message: 'success', data });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, message: error.message, error });
  }
};

export const get = async (req: Request, res: Response) => {
  try {
    const data = await db1.mst_category.findMany({
      include: {
        map_category_to_group: true,
      },
    });
    res.status(200).send({ status: true, message: 'success', data });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, message: error.message, error });
  }
};

