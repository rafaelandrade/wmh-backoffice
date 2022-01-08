import { Request, Response, NextFunction } from 'express'
import { UpdateData, CreateData } from '../../service'
import { UpdateOrCreateValidator } from '../../validator'

class UpdateOrCreateData {
  public async updateOrCreate (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const { where, data, tableName } = request.body
      const wmhUpdateOrCreateValidator = new UpdateOrCreateValidator()
      const create = new CreateData()
      const update = new UpdateData()

      return response.status(200).json({
        error: false,
        data: await wmhUpdateOrCreateValidator.validate(request)
          ? await update.update(where, data, tableName)
          : await create.create(data, tableName)
      })
    } catch (error) {
      next(error)
    }
  }
}

export { UpdateOrCreateData }
