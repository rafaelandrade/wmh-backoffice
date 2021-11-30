import { PrismaClient } from '@prisma/client'
import { logger, errorHandler } from '../../../../helpers'
import { UnauthorizedError } from 'errors-stack'
import { tableNamesConstant } from '../../../constants'

const prisma = new PrismaClient()

export class UpdateData {
  public async update (where: IUpdateObject, data: IUpdateObject, tableName: ITableOptions): Promise<any | Response | string> {
    try {
      if (!tableNamesConstant.includes(`${tableName}`)) {
        throw new UnauthorizedError({
          message: `Could not get data. Table ${tableName} dont exist!`,
          status: 401
        })
      }
      logger.info({ arg: { message: `Going to update table ${tableName} with follow data ${data}` } })
      return prisma[tableName]?.update({ where, data })
    } catch (error: any) {
      return errorHandler({ error: { name: error?.name, message: error?.message, status: error?.status } })
    }
  }
}
