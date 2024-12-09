import { LoginDataAttributes, UserResponse } from '@/types/auth';
import jwt from 'jsonwebtoken';

export function generateAccessToken(user: LoginDataAttributes) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    // expiresIn: process.env.MODE === 'development' ? '1d' : '1h',
    expiresIn: '1h',
  });
}
