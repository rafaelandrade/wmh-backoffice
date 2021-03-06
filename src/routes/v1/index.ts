import Router from 'express-promise-router'

import { healthRouter } from './health'
import { wmhRouter } from './wmh'
import { logger } from '../../helpers/logger'

const v1Router = Router()

v1Router.use('/health', healthRouter)
v1Router.use('/wmh', wmhRouter)

v1Router.get('/', (req, res) => {
  logger.info({ arg: { message: 'HELLO WORLD!' } })
  res.send('Hello WMH-BACKOFFICE WORLD!!')
})

export { v1Router }
