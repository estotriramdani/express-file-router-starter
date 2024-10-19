import { Response, Request } from 'express';
import { db1 } from '@/utils/db1';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { sendEmailNotification } from '@/services/NotificationService';
import moment from 'moment';

export const sendProjectCalculationNotification = async (id: number) => {
  const dataProject = await db1.tr_project.findFirst({
    select: {
      id: true,
      request_id: true,
      expected_completion: true,
      application_id: true,
      project_code: true,
      project_name: true,
      background: true,
      issue_description: true,
      business_impact: true,
      group_id: true,
      plan_start_date: true,
      plan_end_date: true,
      real_start_date: true,
      real_end_date: true,
      percent_done: true,
      auto_percent_done: true,
      state: true,
      is_deleted: true,
      created_at: true,
      created_by: true,
      mst_group: true,
      mst_project_state: true,
    },
    where: { id: id },
  });

  const dataTask = await db1.tr_project_task.findMany({
    where: {
      project_id: id as number,
      is_deleted: false,
    },
    include: {
      tr_project_task: {
        select: {
          task_name: true,
        },
      },
      tr_project: {
        select: {
          project_name: true,
        },
      },
      mst_authorization: {
        select: {
          employee_code: true,
          employee_name: true,
        },
        where: { is_deleted: false },
      },
    },
  });

  const dataTeams = await db1.tr_project_team.findMany({
    where: {
      project_id: id,
      is_deleted: false,
    },
    include: {
      mst_authorization: {
        include: {
          mst_manpower_cost: true,
        },
      },
    },
  });

  const dataRecipients = [
    {
      email: 'adnanwafeeq1@gmail.com',
      name: 'Muhammad Adnan Wafeeq',
    },
    {
      email: 'adnanwafeeq2002@gmail.com',
      name: 'Adnan Wafeeq',
    },
  ];

  const totalManSecond = dataTask.reduce((acc: any, task: any) => acc + task['plan_duration'], 0);
  const totalManHours = totalManSecond / 3600;
  const totalManDays = totalManHours / 24;
  const totalCosts = dataTask.reduce((acc: any, task: any) => acc + task.cost, 0);
  let projectTeams = `
        <tr>
          <td style="border: 1px solid #ccc; padding: 8px; text-align: left;"> - </td>
          <td style="border: 1px solid #ccc; padding: 8px; text-align: left;"> - </td>
          <td style="border: 1px solid #ccc; padding: 8px; text-align: left;"> - </td>
        </tr>`;
  if (dataTeams.length > 0) {
    projectTeams = generateTableRows(dataTeams);
  }

  dataRecipients.forEach(({ email, name }) => {
    sendEmailNotification('StartProject', {
      email,
      name,
      start_date: moment(dataProject.plan_start_date).format('DD MMMM YYYY'),
      finish_date: moment(dataProject.plan_end_date).format('DD MMMM YYYY'),
      man_hours: totalManHours.toFixed(2) + ' Hours',
      man_days: totalManDays.toFixed(2) + ' Days',
      total_costs: formatCurrency(totalCosts),
      project_name: dataProject.project_name,
      teams: projectTeams,
    });
  });

  return true;
};

export const get = [
  authenticateJWT,
  async (req: Request, res: Response) => {
    if (req.method !== 'GET') return res.status(405);

    await sendProjectCalculationNotification(Number(req.params.id));

    return res.status(200).json({ status: true, message: 'Email sent successfully' });
  },
];

function formatCurrency(
  amount: number,
  currency: string = 'IDR',
  locale: string = 'id-ID'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

function generateTableRows(data: any): string {
  return data
    .map(
      (technician: any) => `
          <tr>
            <td style="border: 1px solid #ccc; padding: 8px; text-align: left;">${
              technician.mst_authorization.employee_name
            }</td>
            <td style="border: 1px solid #ccc; padding: 8px; text-align: left;">${
              technician.mst_authorization.mst_manpower_cost.technician_level
            }</td>
            <td style="border: 1px solid #ccc; padding: 8px; text-align: left;">${formatCurrency(
              technician.mst_authorization.mst_manpower_cost.hourly
            )}</td>
          </tr>
        `
    )
    .join('');
}
