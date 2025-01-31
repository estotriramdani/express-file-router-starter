import { Request } from 'express';

export interface IUser {
  username: string;
  email: string;
}

export interface CustomRequest extends Request {
  user?: IUser;
}
