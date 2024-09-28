import { db1 } from "../../../utils/db1";
import { Response, Request } from "express";
import { authenticateJWT } from '../../../middlewares/bearerToken';
import { db3 } from "../../../utils/db3";

export const get =[authenticateJWT,  async (req: Request, res: Response) => {
  if (req.method !== "GET") return res.status(405);

  try {
    const data = await db3.mst_employment.findMany({
        select: {
          employee_code: true,
          employee_name: true
        },
        where: {
          OR: [
            { employee_code: { contains: req.params.term } },
            { employee_name: { contains: req.params.term } }
          ]
        },
        take: 10
      });

      return res.status(200).json({
        status: true,
        data: data,
      });

  } catch (error) {
    return res.status(500).json({ error: "Failed to get data" });
  }

}];
