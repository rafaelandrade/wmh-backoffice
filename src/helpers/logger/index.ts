import { Severity } from 'coralogix-logger'

import { consoleLogger } from './consoleLogger'

export interface ILoggerParams {
  arg: {
    name?: string
    message: string
    stack?: string
    body?: Record<string, unknown>
    validations?: Record<string, unknown>
  }
}

export const logger = {
  warn: ({ arg }: ILoggerParams): void =>
    consoleLogger({ severity: Severity.warning, arg }),
  error: ({ arg }: ILoggerParams): void =>
    consoleLogger({ severity: Severity.error, arg }),
  info: ({ arg }: ILoggerParams): void =>
    consoleLogger({ severity: Severity.info, arg }),
  beautify: ({ arg }: ILoggerParams): string => JSON.stringify(arg, undefined, 2)
}
