import type { Response } from 'express';
import { UploadedFile } from 'express-fileupload';
import path from 'path';
import { ExtendedRequest } from '@/types/auth';
import { generateRandomString } from '@/utils';
import { db1 } from '@/utils/db1';

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/--+/g, '-'); // Replace multiple - with single -
};

const handleUpload = async (file: UploadedFile) => {
  const fileName = 'upload/' + generateRandomString(10) + '_' + slugify(file.name);

  await (file as UploadedFile).mv(path.join(__dirname, `../../../../public/${fileName}`));

  return fileName;
};

export const post = async (req: ExtendedRequest, res: Response) => {
  try {
    const project_id = req.body.project_id;
    const project_flow_id = req.body.project_flow_id;
    const activity_name = req.body.activity_name;
    const date = new Date();
    const content = req.body.content;
    const created_at = new Date();
    const created_by = req?.user?.employment.employee_code;
    const fileDocument = req.files?.document as UploadedFile;

    let document = null;

    if (fileDocument) {
      document = await handleUpload(fileDocument);
    }

    const data = await db1.tr_project_activity.create({
      data: {
        project_id: +project_id,
        project_flow_id: +project_flow_id,
        activity_name,
        date,
        content,
        document,
        created_at,
        created_by,
      },
    });

    res.json({ status: true, message: 'Success', data });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: false, message: error?.message || 'Internal server error', error });
  }
};

export const get = async (req: ExtendedRequest, res: Response) => {};

export const put = async (req: ExtendedRequest, res: Response) => {};

export const del = async (req: ExtendedRequest, res: Response) => {};
