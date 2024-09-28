import { db1 } from "../../../utils/db1";
import { Response, Request } from "express";
// import { authenticateJWT } from '../../../middlewares/bearerToken';

export const put = [async (req: Request, res: Response) => {
  
  try {
    const updateGroup = await db1.mst_application.update({
      where: { id: parseInt(req.params.id) },
      data: req.body.form_data,
    });
    return res.json(updateGroup);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
}];