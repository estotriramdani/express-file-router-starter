import { Response, Request } from "express";
import { db1 } from "@/utils/db1";

export const post = async (req: Request, res: Response) => {
  if (req.method !== "POST")
    return res.status(405).json({
      error: "Method Not Allowed",
    });

  const { nik, department } = req.body;

  try {
    const request = await db1.tr_request.findMany({
      where: {
        status: {
          not: 'Deleted'
        },
        ...(req.body.role ? {} : {
          OR: [
            ...(nik ? [{ creator: nik }] : []),
            ...(department ? [{ department_code: { contains: department.toString() } }] : [])
          ]
        })
      }
    });

    return res.json({ status: true, data: request });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
