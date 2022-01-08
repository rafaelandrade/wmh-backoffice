import { Request } from 'express'
import { tableNamesConstant, errors } from '../../constants'
import { UnauthorizedError } from 'errors-stack'

class UpdateOrCreateValidator {
  public async validate (request: Request): Promise<boolean | any> {
    try {
      const { tableName, where } = request.body

      if (!tableNamesConstant.includes(tableName)) throw new UnauthorizedError({ message: errors.createErrors.tableName, status: 404 })

      return !!where
    } catch (error: any) {
      return { Error: true, message: error?.message }
    }
  }
}

export { UpdateOrCreateValidator }
