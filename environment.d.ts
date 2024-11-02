namespace NodeJS {
  interface ProcessEnv {
    [key: string]: string | undefined;
    DATABASE_URL_DIGITAL_TWIN: string;
    DATABASE_URL_EMPLOYMENT: string;
    JWT_SECRET: string;
    MODE: 'development' | 'production';
  }
}
