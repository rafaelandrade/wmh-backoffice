import captureError from './captureError'
import handleUnmppaedErrors from './handleUnmappedErrors'
import { Response } from 'express'

const errorHandler = ({
  error,
  response
}: IErrorHandlerType): Response | string => {
  const { message, status } = error

  if (!response) return captureError({ error })

  const capturedException = captureError({ error })
  if (!status) return handleUnmppaedErrors({ response, capturedException })

  return response?.status(status).json({
    error: true,
    errors: [
      { name: error.name || 'Error', message: message || 'Unmapped error' }
    ]
  })
}

export { errorHandler }
