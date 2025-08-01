import { Router } from "express";
import { basic } from "../controllers/basic.controller";

export const NewsLetterRouter: Router = Router();

NewsLetterRouter.post("/basic", basic);
