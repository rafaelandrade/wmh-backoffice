import { Application } from 'express'
import * as Sentry from '@sentry/node'
import * as Tracing from '@sentry/tracing'

const initSentry = (app: Application): void => {
  Sentry.init({
    dsn: 'https://33cf49cb632f4e1eb3efaef9b74b1233@o675377.ingest.sentry.io/5989841',
    environment: process.env.NODE_ENV,
    integrations: [
      new Sentry.Integrations.Http({ tracing: true }),
      new Tracing.Integrations.Express({
        app
      })
    ],
    tracesSampleRate: 1.0
  })

  app.use(Sentry.Handlers.requestHandler())
  app.use(Sentry.Handlers.errorHandler())
  app.use(Sentry.Handlers.tracingHandler())
}

export { initSentry }
