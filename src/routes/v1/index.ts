import Router from 'express-promise-router'

import { healthRouter } from './health'

const v1Router = Router()

v1Router.use('/health', healthRouter)
v1Router.get('/', (req, res) => {
  res.send('Hello World!')
})

export { v1Router }
