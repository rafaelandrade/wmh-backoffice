import { LoggerConfig, CoralogixLogger, Log, Severity } from "coralogix-logger";
import * as Sentry from "@sentry/node";

import { keys } from "../../config/keys";
import { logError } from "./loggerError";
import { buildLogObject } from "./logObject";
import { ILoggerParams } from "./";
import { getContext } from "../getContext";

interface IConsoleLoggerParams extends ILoggerParams {
  severity: number;
}

CoralogixLogger.configure(
  new LoggerConfig({
    applicationName: "wmh-backoffice",
    privateKey: keys.coralogixKey,
    subsystemName: "wmh-webservice",
  })
);

const logger = new CoralogixLogger("Logger");

const consoleLogger = ({ severity, arg }: IConsoleLoggerParams): void => {
  const requestId = getContext("requestId");
  requestId && Sentry.setTag("x_request_id", requestId);

  const isError = severity === Severity.error;
  const data = buildLogObject({ isError, arg, requestId });

  logger.addLog(
    new Log({
      severity,
      className: "ConsoleLogger",
      methodName: "logger",
      text: data,
    })
  );

  if (isError) return logError(data);
  console.log(data);
};

export { consoleLogger };
