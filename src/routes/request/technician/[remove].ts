import { Response, Request } from "express";
import { db1 } from "@/utils/db1";

export const post = async (req: Request, res: Response) => {
  if (req.method !== "POST")
    return res.status(405).json({
      error: "Method Not Allowed",
    });

  const { id_user, id_header } = req.body;

  try {
    const request = await db1.tr_request_technician.update({
      where: {
        request_id: parseInt(id_header),
        id: parseInt(id_user)
      },
      data: {
        is_deleted: true
      },

    });

    return res.json({ status: true, data: request });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
