import "dotenv/config";

export const config = {
  port: process.env.PORT || 3001,
  db_host: process.env.DB_HOST || "localhost",
  db_port: Number(process.env.DB_PORT) || 5432,
  db_user: process.env.DB_USER || "postgres",
  db_password: process.env.DB_PASSWORD || "",
  db_name: process.env.DB_NAME || "postgres",
};
