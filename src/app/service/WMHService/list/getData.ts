import { PrismaClient } from "@prisma/client";
import { UnauthorizedError } from "errors-stack";
import { tableNamesConstant } from "../../../constants";
import { errorHandler } from "../../../../helpers";
import { Response } from "express";

const prisma = new PrismaClient();

const getDataService = async (
  tableName: ITableOptions,
  numberTake = 20,
  skipNumber = 0,
  where?: IUpdateObject
): Promise<any | Response | string> => {
  try {
    if (!tableNamesConstant.includes(`${tableName}`)) {
      throw new UnauthorizedError({
        message: `Could not get data. Table ${tableName} dont exist!`,
        status: 401,
      });
    }
    return prisma[tableName]?.findMany(
      where ? { where } : { take: numberTake, skip: skipNumber }
    );
  } catch (error: any) {
    return errorHandler({
      error: {
        name: error?.name,
        message: error?.message,
        status: error?.status,
      },
    });
  }
};

export { getDataService };
