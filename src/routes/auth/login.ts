import { Response, Request } from 'express';
import { generateError, generateRandomString } from '@/utils';

export const post = async (req: Request, res: Response) => {
  try {
    return res.json({});
  } catch (error) {
    return res.status(500).json({
      errors: [
        generateError({
          code: 500,
          title: 'Internal Server Error',
          description: error?.message || 'Something went wrong',
          timestamp: new Date().toISOString(),
          id: generateRandomString(10),
          status: 500,
        }),
      ],
    });
  }
};
