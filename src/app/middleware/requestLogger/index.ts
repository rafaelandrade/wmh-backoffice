import { Request, Response, NextFunction } from 'express'
import { uuid } from 'uuidv4'
import { keys } from '../../../config/keys'
import { setContext, logger } from '../../../helpers'

const requestLogger = (request: Request, response: Response, next: NextFunction): void => {
  const requestId = request.headers['x-request-id'] || uuid()
  setContext({
    key: 'requestId',
    value:
      (typeof requestId === 'string' && requestId.replace(/-/g, '')) ||
      requestId
  })

  logger.info({ arg: { message: `Request starting with id: ${requestId} in environment ${keys.environment}` } })
  logger.info({ arg: { message: `[method] ${request.method}` } })
  logger.info({ arg: { message: `[endpoint] ${request.path}` } })
  logger.info({ arg: { message: `[body] ${logger.beautify(request.body)}` } })
  return next()
}

export { requestLogger }
