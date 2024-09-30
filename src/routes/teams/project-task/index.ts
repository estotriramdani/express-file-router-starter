import { Request, Response } from "express";
import { db1 } from "../../../utils/db1";
import { authenticateJWT } from '../../../middlewares/bearerToken';
import { Prisma } from "@prisma/client";

export const post = async (req: Request, res: Response) => {
    if (req.method !== "POST")
        return res.status(405).json({
            error: "Method Not Allowed",
        });

    const { project_id } = req.body;
    console.log('ini nik', project_id)

    try {
        const request = await db1.tr_project_task.findMany({
            where: {
                OR: [
                    ...(project_id ? [{ project_id: project_id }] : [])
                ]
            }
        });

        return res.json({ status: true, data: request });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
