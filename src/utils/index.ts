import moment from 'moment';
import { TimeUnit } from './query';

/**
 * @description Fill parameters in a template string, e.g. `Hello, {{name}}!` with `{ name: 'John' }` will return `Hello, John!`
 */
export const fillParameters = (template: string, param: Record<string, any>): string => {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => param[key] || match);
};

export const newLineToBr = (text: string): string => {
  return text.replace(/\n/g, '<br>');
};

export const generateRandomString = (length: number): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const transformEmployeeCode = (code: string, length: 4 | 5 = 5) => {
  if (code.length === length) return code;
  const zeroes = length - code.length;
  return '0'.repeat(zeroes) + code;
};

export interface Error {
  id: string;
  status: number;
  code: number;
  title: string;
  description: string;
  timestamp: string;
}

export const generateError = (error: Error): Error => {
  return error;
};

export const getDateRange = (filterDate: string = '1day') => {
  filterDate = filterDate.toLowerCase();
  let startDate: string;
  let endDate: string;
  let unit: TimeUnit = 'hourly';

  if (filterDate === '1day') {
    startDate = moment().subtract(1, 'days').startOf('day').format('YYYY-MM-DD HH:mm:ss');
    endDate = moment().endOf('day').format('YYYY-MM-DD HH:mm:ss');
    unit = 'hourly';
  }

  if (filterDate === '7days') {
    startDate = moment().subtract(7, 'days').startOf('day').format('YYYY-MM-DD HH:mm:ss');
    endDate = moment().endOf('day').format('YYYY-MM-DD HH:mm:ss');
    unit = 'daily';
  }

  if (filterDate === '30days') {
    startDate = moment().subtract(30, 'days').startOf('day').format('YYYY-MM-DD HH:mm:ss');
    endDate = moment().endOf('day').format('YYYY-MM-DD HH:mm:ss');
    unit = 'daily';
  }

  // 3months
  if (filterDate === '3months') {
    startDate = moment().subtract(3, 'months').startOf('day').format('YYYY-MM-DD HH:mm:ss');
    endDate = moment().endOf('day').format('YYYY-MM-DD HH:mm:ss');
    unit = 'monthly';
  }

  // 6months
  if (filterDate === '6months') {
    startDate = moment().subtract(6, 'months').startOf('day').format('YYYY-MM-DD HH:mm:ss');
    endDate = moment().endOf('day').format('YYYY-MM-DD HH:mm:ss');
    unit = 'monthly';
  }

  // 1year
  if (filterDate === '1year' || filterDate === '12months') {
    startDate = moment().subtract(1, 'years').startOf('day').format('YYYY-MM-DD HH:mm:ss');
    endDate = moment().endOf('day').format('YYYY-MM-DD HH:mm:ss');
    unit = 'monthly';
  }

  // ytd
  if (filterDate === 'ytd') {
    startDate = moment().startOf('year').format('YYYY-MM-DD HH:mm:ss');
    endDate = moment().endOf('day').format('YYYY-MM-DD HH:mm:ss');
    unit = 'monthly';
  }

  return { startDate, endDate, unit };
};

export const datesBetween = (startDate: string, endDate: string) => {
  return `AND [DATE] BETWEEN '${startDate}' AND '${endDate}'`;
};

export const generateDatesBetween = (startDate: string, endDate: string): string[] => {
  const dates = [];
  let currentDate = moment(startDate).format('YYYY-MM-DD');
  while (currentDate <= endDate) {
    dates.push(currentDate);
    currentDate = moment(currentDate).add(1, 'days').format('YYYY-MM-DD');
  }
  return dates;
};
