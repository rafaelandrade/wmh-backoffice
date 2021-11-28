import { Request } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getDataService = async (request: Request): Promise<any> => {
  return prisma.residence.findMany()
}

export { getDataService }
