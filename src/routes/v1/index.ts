import Router from 'express-promise-router'

import { healthRouter } from './health'
import { logger } from '../../helpers/logger'

const v1Router = Router()

v1Router.use('/health', healthRouter)
v1Router.get('/', (req, res) => {
  logger.info({ arg: { message: 'HELLO WORLD!' } })
  res.send('Hello World!')
})

export { v1Router }
