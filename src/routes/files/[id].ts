import { Response, Request } from "express";
import { db1 } from "../../utils/db1";
import { authenticateJWT } from '../../middlewares/bearerToken';

export const put = [ authenticateJWT,async (req: Request, res: Response) => {
  console.log('idParam',req.params.id);
  console.log('formEditGroup',req.body.form_data);
  
  try {
    const updateDoc = await db1.tr_document.update({
      where: { id: parseInt(req.params.id) },
      data: req.body.form_data,
    });
    
    return res.json(updateDoc);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
}];