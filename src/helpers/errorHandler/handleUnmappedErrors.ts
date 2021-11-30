import { Response } from 'express'
import { InternalServiceError } from 'errors-stack'

interface IHandleUnmappedErrors {
  response: Response
  capturedException: string
}

const handleUnmppaedErrors = ({ response, capturedException }: IHandleUnmappedErrors): Response => {
  const internalServiceError = new InternalServiceError(`The internal service error with follow exception id ${capturedException}`)

  return response.status(500).json({
    error: true,
    errors: [{
      name: internalServiceError.message,
      message: internalServiceError.message
    }]
  })
}

export default handleUnmppaedErrors
