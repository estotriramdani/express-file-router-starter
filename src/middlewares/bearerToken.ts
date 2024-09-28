import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const SECRET_KEY = process.env.JWT_SECRET;

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
<<<<<<< HEAD
    const authHeader = req.headers.authorization;
  
    if (!authHeader) {
      return res.status(401).json({ message: 'Authorization header missing' });
    }
  
    const token = authHeader
    try {
      const payload = jwt.verify(token, SECRET_KEY);
      (req as any).user = payload; 
      next();
    } catch (ex) {
      res.status(400).json({ message: 'Invalid token.' });
    }
  };
=======
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    console.log('sini')
    return res.status(401).json({
      message: 'Authorization header missing'
    });
  }

  try {
    jwt.verify(authHeader, SECRET_KEY, (err, decoded) => {
      if (err) {
          console.error('Token invalid:', err.message);
          res.status(400).json({
            message: 'Invalid token.'
          });
      } else {
        next();
      }
    })
  } catch (ex) {
    res.status(400).json({
      message: 'Invalid token.'
    });
  }
};
>>>>>>> 5fa1a175691145993ca1ff45463e3e0baab93ce8
