import { Response } from 'express';
import { ExtendedRequest } from '@/types/auth';
import { db1 } from '@/utils/db1';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { Prisma, tr_project_task } from '@/generated/db1';

type ProjectFlowType = Prisma.tr_project_flowGetPayload<{
  include: { mst_project_flow: true; tr_project_activity: true };
}>;

const projectApprovalFlow = async (request_id: number, data: ProjectFlowType[]) => {
  const approvalIndex = data.findIndex((item) => item.mst_project_flow.flow === 'Approval');

  if (!approvalIndex) {
    throw new Error('Approval flow not found');
  }

  if (data[approvalIndex].status) return;

  const validations = await db1.tr_request_validation.findMany({
    where: {
      request_id: request_id,
      state: {
        not: 'Approve',
      },
    },
  });

  let approvalStatus = validations.length === 0;

  if (approvalStatus) {
    await db1.tr_project_flow.update({
      where: {
        id: data[approvalIndex].id,
      },
      data: {
        status: true,
      },
    });
  }
};

const developmentFlow = async (tasks: tr_project_task[], data: ProjectFlowType[]) => {
  const developmentIndex = data.findIndex((item) => item.mst_project_flow.flow === 'Development');

  if (!developmentIndex) {
    throw new Error('Development flow not found');
  }

  if (data[developmentIndex].status) return;

  const projectPercentage = tasks.reduce((acc, curr) => {
    return acc + curr.percent_done;
  }, 0);

  if (projectPercentage && projectPercentage > 0) {
    await db1.tr_project_flow.update({
      where: {
        id: data[developmentIndex].id,
      },
      data: {
        status: true,
      },
    });
  }
};

const taskCalculationFlow = async (data: ProjectFlowType[], projectId: number) => {
  const taskCalculationIndex = data.findIndex(
    (item) => item.mst_project_flow.flow === 'Task Calculation'
  );

  if (!taskCalculationIndex) {
    throw new Error('Task Calculation not found');
  }

  if (data[taskCalculationIndex].status) return;

  const findActivity = await db1.tr_project_activity.findFirst({
    where: {
      project_flow_id: data[taskCalculationIndex].id,
    },
  });

  if (!findActivity) return;

  await db1.tr_project_flow.update({
    data: {
      status: true,
      updated_at: findActivity.created_at,
    },
    where: {
      id: data[taskCalculationIndex].id,
    },
  })
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

      const tasks = await db1.tr_project_task.findMany({
        where: {
          project_id: project.id,
        },
      });

      await taskCalculationFlow(data, project.id);
      await developmentFlow(tasks, data);

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
