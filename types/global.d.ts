import { Response } from 'express'

import {
  ResidenceAddress,
  Residence,
  ResidenceFeatures,
  ResidenceValues
} from '@prisma/client'

declare global {
  /* ~ Here contains a Interface of prisma schema of each table
   */
  export interface IUpdateObject {
    where: ResidenceAddress | Residence | ResidenceFeatures | ResidenceValues;
    data: ResidenceAddress | Residence | ResidenceFeatures | ResidenceValues;
  }

  export interface ITableOptions {
    tableName: string;
  }

  /* ~ interface of Error
  */
  export interface IErrorHandlerType {
    error: {
      name: string
      message: string
      status: number
    }
    response?: Response
  }
}
