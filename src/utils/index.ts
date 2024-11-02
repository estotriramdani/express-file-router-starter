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
