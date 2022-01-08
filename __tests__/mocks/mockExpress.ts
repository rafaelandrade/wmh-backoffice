import { Request, Response, NextFunction } from "express";

interface IResponseProps {
  status?: () => Record<string, unknown>;
  json?: () => Record<string, unknown>;
  send?: () => Record<string, unknown>;
}

const mockExpressRes = () => {
  const res: IResponseProps = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

export const mockExpress = {
  res: { ...mockExpressRes() } as unknown as Response,
  next: jest.fn() as NextFunction,
  req: {
    body: {},
    params: {},
    headers: { authorization: "" },
    query: {},
  } as Request,
};
