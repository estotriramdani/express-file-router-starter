import { Response, Request } from "express";
import { db1 } from "../../../utils/db1";
import { authenticateJWT } from '../../../middlewares/bearerToken';

export const get = [async (req: Request, res: Response) => {
  if (req.method !== "GET") return res.status(405);

  const data = await db1.tr_project_flow.findMany({
    where: {project_id: parseInt(req.params.id)},
    include: {
      mst_project_flow: true
    }
  })
  
  return res.json({data});
}];