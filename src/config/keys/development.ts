import { IKeyProps } from './'

export const development = {
  port: process.env.PORT,
  environment: process.env.NODE_ENV,
  sentryDSN: process.env.SENTRY_DSN
} as IKeyProps
