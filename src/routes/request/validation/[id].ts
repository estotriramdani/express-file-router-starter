import { Response, Request } from 'express';
import { db1 } from '@/utils/db1';
import { authenticateJWT } from '@/middlewares/bearerToken';

const handleApproval = async (requestId: string) => {
  const project = await db1.tr_project.findFirst({
    where: {
      request_id: parseInt(requestId),
    },
  });

  if (!project) return;

  const validations = await db1.tr_request_validation.findMany({
    where: {
      request_id: parseInt(requestId),
      state: {
        not: 'Approve',
      },
    },
  });

  const flow = await db1.tr_project_flow.findFirst({
    where: {
      project_id: project.id,
      mst_project_flow: {
        flow: 'Approval',
      },
    },
  });

  let approvalStatus = validations.length === 0;

  if (flow && !flow.status && approvalStatus) {
    await db1.tr_project_flow.update({
      where: {
        id: flow.id,
      },
      data: {
        state: 'Pending',
      },
    });
  }
};

export const put = [
  authenticateJWT,
  async (req: Request, res: Response) => {
    if (req.method !== 'PUT')
      return res.status(405).json({
        error: 'Method Not Allowed',
      });

    try {
      await db1.tr_request_validation.update({
        where: { id: parseInt(req.params.id) },
        data: {
          ...req.body,
        },
      });

      await handleApproval(req.params.id);

      return res.json({ status: true, data: 'Succeed' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },
];
