import Router from 'express-promise-router'

import { v1Router } from './v1'

const router = Router()

router.use('/v1', v1Router)

export { router }
