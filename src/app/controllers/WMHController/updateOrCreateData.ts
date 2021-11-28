import { Request, Response, NextFunction } from 'express'
import { updateOrCreateData } from '../../service'

class UpdateOrCreateData {
  public async updateOrCreate (request: Request, response: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      return response.status(200).json({ Error: false, Data: await updateOrCreateData(request) })
    } catch (error) {
      next(error)
    }
  }
}

export { UpdateOrCreateData }
