import { CustomRequest } from '@/types';
import { Request, Response, NextFunction } from 'express'

export const printTimestamp = (request: CustomRequest, response: Response, nextFunction: NextFunction) => {
  console.log(`Accessing ${request.originalUrl}: ${new Date().toString()}`);

  if (request.query.stop === 'true') {
    return response.status(403).json({
      message: 'Stop!!',
    });
  }

  request.user = {
    name: 'esto',
    nik: '4189',
  };

  nextFunction();
};