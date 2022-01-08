import { development } from "./development";

const { NODE_ENV } = process.env;

export interface IKeyProps {
  port?: string;
  environment?: string;
  sentryDSN?: string;
  coralogixKey?: string;
  healthToken?: string;
  adminToken?: string;
}

let keys: IKeyProps = {};

switch (NODE_ENV) {
  case "test":
    keys = development;
    break;
  case "development":
    keys = development;
    break;
  case "production":
    break;
  default:
    keys = development;
    break;
}

export { keys };
