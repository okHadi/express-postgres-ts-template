import { config } from "../config/environments";
import { type Request, type Response } from "express";
import { logger } from "../libs/logger";
import pool from "../config/db";

export const basic = async (req: Request, res: Response) => {
  try {
    logger.info(`Basic -> Request received on port = ${config.port}`);

    const queryText = "SELECT NOW()";

    const result = await pool.query(queryText);
    logger.info(`Database time: ${JSON.stringify(result.rows[0])}`);

    return res.status(200).send({
      success: true,
      message: "Basic route is working",
    });
  } catch (err) {
    logger.error("Basic -> ERROR ", (err as Error).message);

    return res.status(500).send({
      success: false,
      message: (err as Error).message,
    });
  }
};
