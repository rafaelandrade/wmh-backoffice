import Router from 'express-promise-router'

import { HealthController } from '../../../app/controllers/HealthController'

const healthController = new HealthController()

const router = Router()

router.get('/', healthController.show)

export { router as healthRouter }
