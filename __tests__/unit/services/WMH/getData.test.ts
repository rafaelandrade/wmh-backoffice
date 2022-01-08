import { PrismaClient } from "@prisma/client";
import { getDataService } from "../../../../src/app/service/WMHService";

const prisma = new PrismaClient();

describe("[getDataService] tests case", () => {
  it("Should return an list of data based on where", async () => {
    const whereObject = {
      id: 2,
    };

    const response = await getDataService(
      "residenceAddress",
      null,
      null,
      whereObject
    );

    expect(response).toBeTruthy();
    expect(response[0].id).toBe(2);
  });

  it("Should return a list of data if not send any where object with size 20 as default", async () => {
    const response = await getDataService("residenceAddress");

    expect(response).toBeTruthy();
    expect(response.length).toBe(20);
  });

  it("Should throw a error in case of not send tableName or send wrong name", async () => {
    try {
      await getDataService("test");
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.message).toBe("Could not get data. Table test dont exist!");
      expect(error.status).toBe(401);
    }
  });
});
