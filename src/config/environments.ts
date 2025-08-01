import "dotenv/config";

export const config = {
  port: process.env.PORT,
  brevoAPIKey: process.env.BREVO_API_KEY || "",
};
