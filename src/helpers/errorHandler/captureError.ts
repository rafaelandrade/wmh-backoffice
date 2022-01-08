import { logger } from '../logger'
import * as Sentry from '@sentry/node'

const captureError = ({ error }: IErrorHandlerType): string => {
  logger.error({ arg: { message: `${error.message}` } })
  return Sentry.captureException(error)
}

export default captureError
