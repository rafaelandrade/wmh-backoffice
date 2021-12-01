import { ILoggerParams } from './'

interface IBuildLogObjectParams extends ILoggerParams {
  isError: boolean
  requestId: string
}

export interface IBuildLogObjectResponse {
  // eslint-disable-next-line camelcase
  x_request_id: string
  context: Record<string, unknown>
}

const buildLogObject = ({
  arg,
  isError,
  requestId
}: IBuildLogObjectParams): IBuildLogObjectResponse => {
  return {
    x_request_id: requestId,
    context: {
      ...(isError
        ? {
            name: arg.name,
            message: arg.message,
            ...(arg.body ? { body: arg.body } : {}),
            ...(arg.validations ? { validations: arg.validations } : {}),
            stack: arg.stack
          }
        : { message: arg.message })
    }
  }
}

export { buildLogObject }
