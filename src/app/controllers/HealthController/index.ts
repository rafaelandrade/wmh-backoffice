import { Request, Response, NextFunction } from "express";

class HealthController {
  public show(
    _: Request,
    response: Response,
    next: NextFunction
  ): Response | undefined {
    try {
      return response
        .status(200)
        .json({ message: "WMH-BACKOFFICE HELLO WORLD! EVERYTHING OK!" });
    } catch (error) {
      next(error);
    }
  }
}

export { HealthController };
