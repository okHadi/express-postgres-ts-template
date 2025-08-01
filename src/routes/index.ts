import type { Application, Router } from "express";
import { BasicRouter } from "./basic.route";

const _routes: Array<[string, Router]> = [["/basic", BasicRouter]];

export const routes = (app: Application): void => {
  _routes.map((route) => {
    const [url, router] = route;
    return app.use(url, router);
  });
};
