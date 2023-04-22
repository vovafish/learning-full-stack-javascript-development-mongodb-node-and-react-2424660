const env = process.env;

export const PORT = env.PORT ?? "8000";
export const HOST = env.HOST ?? "localhost";
export const SERVER_URL = `http://${HOST}:${PORT}`;

export const MONGODB_URI =
  env.MONGODB_URI ?? "mongodb://localhost:27017";
export const DATABASE_NAME = env.DATABASE_NAME ?? "local";

export default {
  HOST,
  PORT,
  SERVER_URL,
};
