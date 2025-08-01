import express, { type Express, type Request, type Response } from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import { config } from "./config/environments";
import { logger } from "./libs/logger";
import morgan from "morgan";
import { routes } from "./routes";

dotenv.config();

const app: Express = express();
const port = config.port;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

morgan.token("host", (req) => {
  return req.headers.host;
});
app.use(
  morgan(":method :host :status :res[content-length] - :response-time ms"),
);
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// routes
routes(app);

app.get("/", (req: Request, res: Response) => {
  try {
    logger.info("HEALTH -> GET_HEALTH = Health OK! Server is running");
    return res.status(200).send({
      success: true,
      code: 200,
      message: "Health OK! Server is running",
    });
  } catch (err) {
    logger.error(`HEALTH -> GET_HEALTH = ${(err as Error).message}`);
    return res.status(500).send({
      success: false,
      error: { code: 500, message: (err as Error).message },
    });
  }
});

app.listen(port, () => {
  logger.info(
    `Server listening on port ${port}, url: http://localhost:${port}`,
  );
});
