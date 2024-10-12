import fs from 'fs';
import path from 'path';
import { emailSender } from './EmailService';
import { encryptRequestValidation, fillParameters, newLineToBr } from '@/utils';
import { db1 } from '@/utils/db1';
import moment from 'moment';

interface Recipient {
  email: string;
}

interface Files {
  email: string;
}

interface Config {
  recipients: {
    email: string;
  };
  files: Files;
  title: string;
}

interface ConfigParam {
  sendEmail?: boolean;
  recipients?: {
    email: string;
  };
  files?: Files;
  title?: string;
}

const generateConfig = async (type: string, param: any): Promise<Config> => {
  let files: Files = { email: '' };
  let target_user: Recipient[] = [];
  let recipients = { email: '' };
  let title = '';

  if (type === 'StartProject') {
    title = 'Test Email';
    recipients.email = param['email'];
    files.email = 'bodyEmailNotifStartProject.html';
  } else {
    console.log('Notification type not found!');
    throw new Error('Notification type not found!');
  }

  return { recipients, files, title };
};

export const sendEmailNotification = async (
  type: string,
  param: any,
  configParam: ConfigParam = {}
): Promise<boolean> => {
  const sendEmail = configParam.sendEmail !== undefined ? configParam.sendEmail : true;
  let recipients = configParam.recipients || { email: '' };
  let files = configParam.files || { email: '' };
  let title = configParam.title || '';

  const emailFolderPath = './src/views/email/';
  let bodyEmail = '';

  let config: Config;

  if (param && recipients && files && title) {
    config = {
      recipients,
      files,
      title,
    };
  } else {
    config = await generateConfig(type, param);
  }

  const emailFilePath = `${emailFolderPath}${config.files.email}`;

  try {
    bodyEmail = fs.readFileSync(emailFilePath, 'utf8');
  } catch (err) {
    throw new Error(err as string);
  }

  bodyEmail = fillParameters(bodyEmail, param);

  if (sendEmail) {
    await emailSender({
      subject: config.title,
      to: config.recipients.email,
      cc: '',
      text: 'Please enable HTML!',
      body: bodyEmail,
      attachments: [],
    });
  }

  return true;
};

export const sendEmailRequestValidation = async (params: {
  requestId: number;
  /** 5 digit of employee_code */
  validator: string;
}) => {
  const encrypted = encryptRequestValidation(params.requestId, params.validator);

  const validation_link = `${process.env.FE_URL}/request-validation?value=${encrypted}`;

  const requestData = await db1.tr_request.findFirst({
    where: {
      id: params.requestId,
    },
  });

  if (!requestData) {
    throw new Error('Request not found');
  }

  const templateParams = {
    validatorName: '',
    creatorName: '',
    ticket_name: requestData.ticket_name,
    type: requestData.type,
    creation_date: moment(requestData.creation_date).format('LLLL'),
    department_name: requestData.department_name,
    background: newLineToBr(requestData.background),
    issue_description: newLineToBr(requestData.issue_description),
    business_impact: newLineToBr(requestData.business_impact),
    validation_link,
  };

  let creator = requestData.creator;
  if (creator.length < 5) {
    creator = `0${creator}`;
  }

  const employeeData = await db1.$queryRaw<
    readonly [{ employee_name: string; employee_code: string; mail_id: string }]
  >`SELECT 
    b.employee_name,
    b.employee_code,
    b.mail_id
  FROM 
    aio_employee.mst_employment b 
  WHERE b.employee_code IN (${requestData.creator}, ${params.validator})
  `;

  const creatorDataEmployee = employeeData.find(
    (data) => data.employee_code === requestData.creator
  );

  const creatorName = creatorDataEmployee?.employee_name || '';

  const validatorDataEmployee = employeeData.find(
    (data) => data.employee_code === params.validator
  );

  const validatorName = validatorDataEmployee?.employee_name || '';

  templateParams.creatorName = creatorName;
  templateParams.validatorName = validatorName;

  const template = fs.readFileSync(
    path.resolve(__dirname, '../views/email/bodyEmailRequestValidation.html'),
    'utf8'
  );

  const html = fillParameters(template, templateParams);

  await emailSender({
    subject: 'Request Validation',
    // to: validatorDataEmployee?.mail_id || '',
    to: 'enurlustiawan@aio.co.id',
    text: 'Please enable HTML!',
    body: html,
    attachments: [],
    cc: '',
  });

  return true;
};
