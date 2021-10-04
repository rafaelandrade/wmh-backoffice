import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import httpContext from 'express-http-context'
import { router } from './routes'
import { initSentry } from './helpers'
import { requestLogger } from './app/middleware'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.routes()
    this.security()
    this.setupSentry()
    this.setupLogs()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(httpContext.middleware)
  }

  private security (): void {
    const rateLimiter = rateLimit({
      windowMs: 1 * 60 * 1000,
      max: 500,
      keyGenerator: (req) => {
        return req.ip
      },
      handler: (_, res) => {
        res.status(429).send('Limit of requests is hit-in')
      }
    })

    this.express.use(rateLimiter)
    this.express.use(helmet())
  }

  private setupLogs (): void {
    this.express.use(requestLogger)
  }

  private routes (): void {
    this.express.use(router)
  }

  private setupSentry (): void {
    initSentry(this.express)
  }
}

export default new App().express
