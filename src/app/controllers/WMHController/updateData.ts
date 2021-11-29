import { PrismaClient } from '@prisma/client'
import { logger } from '../../../helpers'

const prisma = new PrismaClient()

interface IUpdateObject {
    where: { name: string },
    update: { name: string }
}

class UpdateData {
  public async update (where: IUpdateObject, data: IUpdateObject, tableName: string): Promise<any> {
    logger.info({ arg: { message: `Going to update table ${tableName} with follow data ${data}` } })
    return prisma[tableName]?.update({ where, data })
  }
}

export { UpdateData }
