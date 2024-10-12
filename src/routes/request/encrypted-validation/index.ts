import { getRequestValidationDetail } from '@/services/NotificationService';
import { decryptRequestValidation } from '@/utils';
import type { Request, Response } from 'express';

export const post = async (req: Request, res: Response) => {};

export const get = async (req: Request, res: Response) => {
  try {
    const { requestId, validator } = decryptRequestValidation(req.query.value as string);

    const requestData = await getRequestValidationDetail({
      requestId,
      validator,
    });

    res.json({ status: true, data: requestData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: 'Internal Server Error', error });
  }
};

export const put = async (req: Request, res: Response) => {};

export const del = async (req: Request, res: Response) => {};
