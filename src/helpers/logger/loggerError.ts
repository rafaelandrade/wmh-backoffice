import * as Sentry from '@sentry/node'

import { IBuildLogObjectResponse } from './logObject'

interface ILogErrorParams extends IBuildLogObjectResponse {
  message?: string
}

const logError = (data: ILogErrorParams): void => {
  console.error(data)
  Sentry.addBreadcrumb({
    category: data.constructor.name,
    message: data.message,
    level: Sentry.Severity.Error,
    data
  })
}

export { logError }
