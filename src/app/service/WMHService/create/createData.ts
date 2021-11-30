import { PrismaClient } from '@prisma/client'
import { UnauthorizedError } from 'errors-stack'
import { tableNamesConstant } from '../../../constants'
import { logger, errorHandler } from '../../../../helpers'
import { Response } from 'express'

const prisma = new PrismaClient()

export class CreateData {
  public async create (data: IUpdateObject, tableName: ITableOptions): Promise<any | Response | string> {
    try {
      if (!tableNamesConstant.includes(`${tableName}`)) {
        throw new UnauthorizedError({
          message: `Could not create data. Table ${tableName} dont exist!`,
          status: 401
        })
      }
      logger.info({ arg: { message: `Going to create data for table ${tableName}. With follow data ${data}...` } })
      return prisma[tableName]?.create({ data })
    } catch (error: any) {
      return errorHandler({ error: { name: error?.name, message: error?.message, status: error?.status } })
    }
  }
}
