import { Request, Response, NextFunction } from 'express'
import { updateOrCreateData } from '../../service'
import { UpdateOrCreateValidator } from '../../validator'

class UpdateOrCreateData {
  public async updateOrCreate (request: Request, response: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const wmhUpdateOrCreateValidator = new UpdateOrCreateValidator()

      await wmhUpdateOrCreateValidator.validate(request) ? update : create

      return response.status(200).json({ Error: false, Data: await updateOrCreateData(request) })
    } catch (error) {
      next(error)
    }
  }
}

export { UpdateOrCreateData }
