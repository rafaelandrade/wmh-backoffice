import { UpdateOrCreateData } from "../../../../src/app/controllers";

import { mockExpress } from "../../../mocks/mockExpress";

const { req, res, next } = mockExpress;

describe("[UpdateOrCreateData] test case", () => {
  it("Should return status 200 error false and update data in case of send where object ", async () => {
    const updateOrCreate = new UpdateOrCreateData();

    req.body = {
      tableName: "residenceAddress",
      where: { id: 5 },
      data: { street: "Cícero Roza" },
    };

    const response = await updateOrCreate.updateOrCreate(req, res, next);

    expect(response.status).toBeCalledWith(200);
    expect(response.json).toBeCalledWith({
      error: false,
      data: {
        CEP: null,
        complement: null,
        country: "Brasil",
        createdAt: null,
        district: " Quarta Parada",
        id: 5,
        numberResidence: null,
        state: "São Paulo",
        street: "Cícero Roza",
        updatedAt: null,
      },
    });
  });

  it("Should return status 200 and error false and create function should be called in case of not send where object", async () => {
    const updateOrCreate = new UpdateOrCreateData();

    req.body = {
      tableName: "residenceFeatures",
      data: {
        ResidenceId: 1,
        key: "metroFlag",
        value: "true",
      },
    };

    const response = await updateOrCreate.updateOrCreate(req, res, next);

    expect(response.status).toBeCalledWith(200);
    expect(response.json).toBeCalledWith({
      error: false,
      data: {
        ResidenceId: 1,
        createdAt: null,
        id: 1,
        updatedAt: null,
        key: "metroFlag",
        value: "true",
      },
    });
  });

  it("Should throw a error in case of not send any tableName or send wrong", async () => {
    const updateOrCreate = new UpdateOrCreateData();

    req.body = {
      tableName: null,
      data: {},
    };

    try {
      await updateOrCreate.updateOrCreate(req, res, next);
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.status).toBe(401);
    }
  });
});
