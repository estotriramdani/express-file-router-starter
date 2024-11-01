import { getRequestValidationDetail } from '@/services/NotificationService';
import { decryptRequestValidation } from '@/utils';
import { db1 } from '@/utils/db1';
import type { Request, Response } from 'express';

export const get = async (req: Request, res: Response) => {
  try {
    const { requestId, validator } = decryptRequestValidation(req.query.value as string);

    const requestData = await getRequestValidationDetail({
      requestId,
      validator,
    });

    const validationData = await db1.tr_request_validation.findFirst({
      where: {
        request_id: requestId,
        user_id_validate: {
          endsWith: validator,
        },
      },
    });

    res.json({
      status: true,
      data: {
        ...requestData,
        state: validationData.state,
        status: validationData.status,
        validation_date: validationData.validation_date,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: 'Internal Server Error', error });
  }
};

export const put = async (req: Request, res: Response) => {
  try {
    const { requestId, validator } = decryptRequestValidation(req.query.value as string);

    const validationData = await db1.tr_request_validation.findFirst({
      where: {
        request_id: requestId,
        user_id_validate: {
          endsWith: validator,
        },
      },
    });

    if (!validationData) {
      throw new Error('Validator not found', {
        cause: 'Validator not found',
      });
    }

    const { state, comment_validation } = req.body;
    const validation_date = new Date();
    const status = 'Completed';

    const edit = await db1.tr_request_validation.update({
      data: {
        state,
        comment_validation,
        validation_date,
        status,
      },
      where: {
        id: validationData.id,
      },
    });

    res.status(200).json({ status: true, data: edit });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: false, message: error?.message || 'Internal Server Error', error });
  }
};
