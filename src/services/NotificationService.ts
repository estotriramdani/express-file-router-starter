import fs from 'fs';
import { emailSender } from './EmailService';
import { fillParameters } from '@/utils';

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
        title = "Test Email"
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
