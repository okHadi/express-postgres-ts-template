import { config } from "../config/environments";
import { type Request, type Response } from "express";
import { logger } from "../libs/logger";

export const basic = async (req: Request, res: Response) => {
  try {
    logger.info("NEWSLETTER -> SUBSCRIBE = ", req.body);
    return res.status(200).send({
      success: true,
      message: "Basic route is working",
    });
  } catch (err) {
    logger.error("NEWSLETTER -> SUBSCRIBE = ", (err as Error).message);

    return res.status(500).send({
      success: false,
      message: (err as Error).message,
    });
  }
};
