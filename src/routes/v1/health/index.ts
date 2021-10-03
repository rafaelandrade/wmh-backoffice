import Router from 'express-promise-router'

import { HealthController } from '../../../controllers/HealthController'

const healthController = new HealthController()

const router = Router()

router.get('/', healthController.show)

export { router as healthRouter }
