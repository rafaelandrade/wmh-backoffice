import { requireHealthToken } from "../../../src/app/middleware/requireHealthToken";
import { keys } from "../../../src/config/keys";
import { mockExpress } from "../../mocks/mockExpress";

const { req, res, next } = mockExpress;

describe("[requireHealthToken] test case", () => {
  it("Should call res with status 401 and and UnauthorizedError if no auth is provided", async () => {
    keys.healthToken = "aaaa";
    req.headers.authorization = undefined;
    await requireHealthToken(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      error: true,
      message: "Any token was provided.",
    });
  });

  it("Should call next for a valid token", async () => {
    const token = "token-teste";
    keys.healthToken = token;
    req.headers.authorization = token;
    await requireHealthToken(req, res, next);
    expect(next).toBeCalled();
  });
});
