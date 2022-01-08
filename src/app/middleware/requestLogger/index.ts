import { Request, Response, NextFunction } from "express";
import { uuid } from "uuidv4";
import { keys } from "../../../config/keys";
import { setContext, logger } from "../../../helpers";

const requestLogger = (
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  const requestId = request.headers["x-request-id"] || uuid().replace(/-/g, "");
  setContext({
    key: "requestId",
    value:
      (typeof requestId === "string" && requestId.replace(/-/g, "")) ||
      requestId,
  });

  logger.info({
    arg: {
      message: `Request starting with id: ${requestId} in environment ${keys.environment}`,
    },
  });
  logger.info({ arg: { message: `[method] ${request.method}` } });
  logger.info({ arg: { message: `[endpoint] ${request.path}` } });
  return next();
};

export { requestLogger };
