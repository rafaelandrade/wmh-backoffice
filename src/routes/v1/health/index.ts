import Router from 'express-promise-router'

import { HealthController } from '../../../app/controllers/HealthController'
import { requireHealthToken } from '../../../app/middleware'

const healthController = new HealthController()

const router = Router()

router.get('/', requireHealthToken, healthController.show)

export { router as healthRouter }
