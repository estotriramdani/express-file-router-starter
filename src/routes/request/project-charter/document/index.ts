import { Response, Request } from 'express';
import { db1 } from '@/utils/db1';

export const post = async (req: Request, res: Response) => {
    if (req.method !== 'POST')
        return res.status(405).json({
            error: 'Method Not Allowed',
        });

    const {
        document,
        id
    } = req.body;

    try {
        await db1.tr_document.updateMany({
            where: {
              id: { in: document },
            },
            data: {
              type: 'project_charter',
              type_id: Number(id),
            },
          });
        return res.json({
            status: true,
            data: 'Succeed'
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};