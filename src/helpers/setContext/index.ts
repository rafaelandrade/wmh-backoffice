import httpContext from "express-http-context";

interface ISetContextParams {
  key: string;
  value: string | string[];
}

const setContext = ({ key, value }: ISetContextParams): void => {
  return httpContext.set(key, value);
};

export { setContext };
