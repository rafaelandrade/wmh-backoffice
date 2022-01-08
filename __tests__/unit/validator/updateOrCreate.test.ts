import { UpdateOrCreateValidator } from "../../../src/app/validator/";
import { mockExpress } from "../../mocks";
import { prismaMock } from "../../../singleton";
const { req } = mockExpress;

describe("[updateOrCreate] tests case", () => {
  it("Should throw a error in case of not send tableName", async () => {
    req.body = {};
    try {
      const updateOrCreateValidator = new UpdateOrCreateValidator();
      await updateOrCreateValidator.validate(req);
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.message).toBe(
        "Could not continue in create process. Not find any table based on name was send."
      );
    }
  });

  it("Should throw an error in case of tableName send was different of expect table name", async () => {
    req.body = { tableName: "teste" };
    try {
      const updateOrCreateValidator = new UpdateOrCreateValidator();
      await updateOrCreateValidator.validate(req);
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.message).toBe(
        "Could not continue in create process. Not find any table based on name was send."
      );
    }
  });

  it("Should return True in case of not find any data in table", () => {
    prismaMock.residence.findMany.mockReturnValue({ id: 1 });
    req.body = { tableName: "residence" };

    const updateOrCreateValidator = new UpdateOrCreateValidator();
    const response = updateOrCreateValidator.validate(req);

    expect(response).toBeTruthy;
  });
});
