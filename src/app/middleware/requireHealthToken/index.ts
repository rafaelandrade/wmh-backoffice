import { Request, Response, NextFunction } from "express";
import { keys } from "../../../config/keys";
import { HealthError } from "errors-stack";
import { logger } from "../../../helpers/logger";

const requireHealthToken = (
  request: Request,
  response: Response,
  next: NextFunction
): Response<any, Record<string, any>> | void => {
  const auth = request.headers.authorization;

  logger.info({ arg: { message: "Sen" } });
  if (auth && auth === keys.healthToken) {
    return next();
  }

  const healthError = new HealthError("Any token was provided.");
  return response
    .status(401)
    .json({ error: true, message: healthError.message });
};

export { requireHealthToken };
