import { Request, Response, NextFunction } from "express";
import { UnauthorizedError } from "errors-stack";
import { keys } from "../../../config/keys";

const requireAdminToken = (
  request: Request,
  response: Response,
  next: NextFunction
): Response<any, Record<string, any>> | void => {
  const auth = request.headers.authorization;

  if (!auth) throw new UnauthorizedError({ message: "", status: 401 });

  if (auth === keys.adminToken) {
    request.body.adminFullAccess = true;
    request.body.employee = request?.body?.employee || "SYSTEM";
    return next();
  }

  const unauthorizedError = new UnauthorizedError({ message: "", status: 401 });
  return response
    .status(401)
    .json({ error: true, message: unauthorizedError.message });
};

export { requireAdminToken };
