import { GetData } from "../../../../src/app/controllers";

import { mockExpress } from "../../../mocks/mockExpress";

const { req, res, next } = mockExpress;

describe("[GetData] test case", () => {
  it("Should return status 200 error false and some data ", async () => {
    const getDataObject = new GetData();

    req.body = { tableName: "residenceAddress", where: { id: 2 } };

    const response = await getDataObject.getData(req, res, next);

    expect(response.status).toBeCalledWith(200);
    expect(response.json).toBeCalledWith({
      error: false,
      data: [
        {
          CEP: null,
          complement: null,
          country: "Brasil",
          createdAt: null,
          district: "teste",
          id: 2,
          numberResidence: null,
          state: "sp",
          street: "batata",
          updatedAt: null,
        },
      ],
    });
  });
});
