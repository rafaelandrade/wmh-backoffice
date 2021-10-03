import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import { router } from './routes'
import { initSentry } from './helpers'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.routes()
    this.security()
    this.setupSentry()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
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

  private routes (): void {
    this.express.use(router)
  }

  private setupSentry (): void {
    initSentry(this.express)
  }
}

export default new App().express
