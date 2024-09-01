import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const SECRET_KEY = process.env.JWT_SECRET;

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
  
    if (!authHeader) {
      return res.status(401).json({ message: 'Authorization header missing' });
    }
  
    const token = authHeader.split(' ')[1];
    try {
      const payload = jwt.verify(token, SECRET_KEY);
      (req as any).user = payload; 
      next();
    } catch (ex) {
      res.status(400).json({ message: 'Invalid token.' });
    }
  };
