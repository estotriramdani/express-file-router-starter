import { db1 } from '@/utils/db1';

interface NotificationPayload {
  action_url: string;
  title: string;
  message: string;
  employee_code: string;
}

export const createNotification = async (payload: NotificationPayload | NotificationPayload[]) => {
  if (Array.isArray(payload)) {
    const result = await db1.tr_notification.createMany({
      data: payload,
    });
    return result;
  }

  return await db1.tr_notification.create({
    data: payload,
  });
};
