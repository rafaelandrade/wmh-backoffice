import { IKeyProps } from './'

export const production = {
  port: process.env.PORT,
  environment: process.env.NODE_ENV,
  sentryDSN: process.env.SENTRY_DSN,
  coralogixKey: process.env.CORALOGIX_KEY,
  healthToken: process.env.HEALTH_TOKEN,
  adminToken: process.env.ADMIN_MICROSSERVICE_TOKEN
} as IKeyProps
