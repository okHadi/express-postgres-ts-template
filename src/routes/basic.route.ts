import { Router } from "express";
import { basic } from "../controllers/basic.controller";

export const BasicRouter: Router = Router();

BasicRouter.get("/test", basic);
