import { UserResponse } from '@/types/auth';
import jwt from 'jsonwebtoken';

export function generateAccessToken(user: UserResponse) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
}
