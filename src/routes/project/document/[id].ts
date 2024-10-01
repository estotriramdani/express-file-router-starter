import { Response, Request } from "express";
import { db1 } from "../../../utils/db1";
import { authenticateJWT } from '../../../middlewares/bearerToken';
import { apiOk } from '../../../tools/common';

export const del = [authenticateJWT, async (req: Request, res: Response) => {
    try {
      await db1.tr_document.update({
        where: { id: parseInt(req.params.id) },
        data: { is_deleted: "1" }
      });
      apiOk(res, { deleted : 1});
    } catch (error) {
      return res.status(500).json({ error: "Failed to delete data" });
    }
  }];



  export const get = [ authenticateJWT, async (req: Request, res: Response) => {
    if (req.method !== "GET") return res.status(405);
    
    const data = await db1.tr_document.findMany({
      where: { type_id: parseInt(req.params.id),
        type :'project',
        is_deleted: '0'
       },
       orderBy: {
        id: 'desc' // or 'desc' for descending order
      }
    })
    apiOk(res, data);
  }];


  export const put = [ authenticateJWT, async (req: Request, res: Response) => {
    console.log(req.body)
    try {
      const data = await db1.tr_document.update({
        data: req.body,
        where: { id: parseInt(req.params.id) }
      }) 

      apiOk(res,data);
  
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: "Failed to create user" });
    }
  }];
