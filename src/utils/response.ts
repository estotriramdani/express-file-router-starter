import { generateError, generateRandomString } from '.';

export const catchResponse = (res: any, error: any) => {
  res.status(400).json({
    errors: [
      generateError({
        code: 400,
        description: error?.message || 'Internal Server Error',
        id: generateRandomString(10),
        status: 400,
        title: 'Internal Server Error',
        timestamp: new Date().toISOString(),
      }),
    ],
  });
}