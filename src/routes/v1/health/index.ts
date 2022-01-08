import Router from "express-promise-router";
import { Request, Response, NextFunction } from "express";

import { HealthController } from "../../../app/controllers/HealthController";
import { requireHealthToken } from "../../../app/middleware";

const healthController = new HealthController();

const router = Router();

router.get(
  "/",
  requireHealthToken,
  (request: Request, response: Response, next: NextFunction) => {
    return healthController.show(request, response, next);
  }
);

export { router as healthRouter };
