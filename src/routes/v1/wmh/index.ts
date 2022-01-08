import Router from 'express-promise-router'
import { Request, Response, NextFunction } from 'express'
import { requireAdminToken } from '../../../app/middleware'
import { GetData, UpdateOrCreateData } from '../../../app/controllers/WMHController'

const router = Router()
const getData = new GetData()
const updateOrCreate = new UpdateOrCreateData()

router.post('/get-data', requireAdminToken, (request: Request, response: Response, next: NextFunction) => {
  return getData.getData(request, response, next)
})

router.post('/update-data', requireAdminToken, (request: Request, response: Response, next: NextFunction) => {
  return updateOrCreate.updateOrCreate(request, response, next)
})

export { router as wmhRouter }
