/**
 * @description Fill parameters in a template string, e.g. `Hello, {{name}}!` with `{ name: 'John' }` will return `Hello, John!`
 */
export const fillParameters = (template: string, param: Record<string, any>): string => {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => param[key] || match);
};
