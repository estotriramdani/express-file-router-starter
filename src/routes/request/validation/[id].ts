import { Response, Request } from "express";
import { db1 } from "../../../utils/db1";
import { db2 } from "../../../utils/db2";
import { db3 } from "../../../utils/db3";
import jwt from "jsonwebtoken";
import md5 from "md5";
import moment from 'moment'
import { authenticateJWT } from '../../../middlewares/bearerToken';

const JWT_SECRET = process.env.JWT_SECRET || '';


export const put = [authenticateJWT, async (req: Request, res: Response) => {
  if (req.method !== "PUT")
    return res.status(405).json({
      error: "Method Not Allowed",
    });

  try {
    await db1.tr_request_validation.update({
      where: { id: parseInt(req.params.id) },
      data: {
        ...req.body
      },
    });

    return res.json({ status: true, data: 'Succeed' });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}];




