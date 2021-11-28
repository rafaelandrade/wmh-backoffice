import { Request, Response, NextFunction } from 'express'
import { getDataService } from '../../service'

class GetData {
  public async getData (request: Request, response: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const data = await getDataService(request)
      return response.status(200).json({ Error: false, Data: data })
    } catch (error) {
      next(error)
    }
  }
}

export { GetData }
