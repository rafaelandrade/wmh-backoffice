import { Request } from "express";
import { PrismaClient } from "@prisma/client";
import { UnauthorizedError } from "errors-stack";

const prisma = new PrismaClient();

enum enumTableOptionsName {
  "residence",
  "residenceAddress",
}

interface ITableOptions {
  [index: string]: enumTableOptionsName;
}

const getDataService = async (
  tableName: ITableOptions,
  numberTake: number = 20,
  skipNumber: number = 0
): Promise<Array<string> | Object> => {
  try {
    if (!["residence", "residenceAddress"].includes(`${tableName}`))
      throw new UnauthorizedError({
        message: `Could not get data. Table ${tableName} dont exist!`,
        status: 401,
      });
    return prisma[tableName]?.findMany({ take: numberTake, skip: skipNumber });
  } catch (error: any) {
    return { Error: true, message: error?.message };
  }
};

export { getDataService };
