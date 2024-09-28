import { Response, Request } from "express";
import { db1 } from "../../utils/db1";
import { authenticateJWT } from '../../middlewares/bearerToken';
import { ok } from '../../tools/common';

export const del = [authenticateJWT, async (req: Request, res: Response) => {
    try {
      await db1.tr_project.update({
        where: { id: parseInt(req.params.id) },
        data: { is_deleted: "1" }
      });
      // return res.status(204).end();
      return res.status(200).json({
        success: true,
      });
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: "Failed to delete career area" });
    }
  }];