import { Response } from 'express';
import { ExtendedRequest } from '@/types/auth';
import { db1 } from '@/utils/db1';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { Prisma } from '@/generated/db1';
import { sendProjectCalculationNotification } from '../send-notification/[id]';

type ProjectFlowType = Prisma.tr_project_flowGetPayload<{
  include: { mst_project_flow: true; tr_project_activity: true };
}>;

const projectApprovalFlow = async (request_id: number, data: ProjectFlowType[]) => {
  const approvalIndex = data.findIndex((item) => item.mst_project_flow.flow === 'Approval');

  if (approvalIndex === -1) {
    throw new Error('Approval flow not found');
  }

  if (data[approvalIndex].state === 'Done') return;

  const validations = await db1.tr_request_validation.findMany({
    where: {
      request_id: request_id,
      state: {
        not: 'Approve',
      },
    },
  });

  let approvalStatus = validations.length === 0;

  if (approvalStatus === true) {
    const findLastValidation = await db1.tr_request_validation.findFirst({
      where: {
        request_id: request_id,
      },
      orderBy: {
        validation_date: 'desc',
      },
    });

    await db1.tr_project_flow.update({
      where: {
        id: data[approvalIndex].id,
      },
      data: {
        state: 'Done',
        updated_at: findLastValidation.validation_date,
      },
    });
  } else {
    await db1.tr_project_flow.update({
      where: {
        id: data[approvalIndex].id,
      },
      data: {
        state: 'Pending',
      },
    });
  }
};

const flowByProjectActivity = async (data: ProjectFlowType[], flowName: string) => {
  const flowIndex = data.findIndex((item) => item.mst_project_flow.flow === flowName);

  if (flowIndex === -1) {
    throw new Error(`Flow for ${flowName} is not found`);
  }

  if (data[flowIndex].state === 'Done') return;

  const findActivity = await db1.tr_project_activity.findFirst({
    where: {
      project_flow_id: data[flowIndex].id,
    },
    orderBy: {
      created_at: 'desc',
    }
  });

  if (!findActivity) return;

  await db1.tr_project_flow.update({
    data: {
      updated_at: findActivity.created_at,
      state: findActivity.state
    },
    where: {
      id: data[flowIndex].id,
    },
  });

  // TODO: Uncomment later
  // if (flowName === 'Task Calculation' && data[flowIndex].state === 'Done') {
  //   await sendProjectCalculationNotification(findActivity.project_id);
  // }
};

export const get = [
  async (req: ExtendedRequest, res: Response) => {
    if (req.method !== 'GET') return res.status(405);

    try {
      const data = await db1.tr_project_flow.findMany({
        where: { project_id: parseInt(req.params.id) },
        include: {
          mst_project_flow: true,
          tr_project_activity: true,
        },
      });

      const project = await db1.tr_project.findUnique({
        where: {
          id: parseInt(req.params.id),
        },
      });

      if (!project) return res.status(404).json({ message: 'Project not found' });

      await projectApprovalFlow(project.request_id, data);

      await flowByProjectActivity(data, 'Task Calculation');
      await flowByProjectActivity(data, 'Development');
      await flowByProjectActivity(data, 'UAT Testing');
      await flowByProjectActivity(data, 'Security Testing');
      await flowByProjectActivity(data, 'Deployment');
      await flowByProjectActivity(data, 'Go Live');

      const finalData = await db1.tr_project_flow.findMany({
        where: { project_id: parseInt(req.params.id) },
        include: {
          mst_project_flow: true,
          tr_project_activity: true,
        },
      });

      return res.json({ data: finalData });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ status: false, message: error?.message || 'Internal server error', error });
    }
  },
];
