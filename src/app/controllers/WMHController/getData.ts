import { Request, Response, NextFunction } from "express";
import { getDataService } from "../../service";

class GetData {
  public async getData(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const { tableName, skipNumber, numberTake, where } = request.body;
      const data = await getDataService(
        tableName,
        numberTake,
        skipNumber,
        where
      );
      return response.status(200).json({ error: false, data: data });
    } catch (error) {
      next(error);
    }
  }
}

export { GetData };
