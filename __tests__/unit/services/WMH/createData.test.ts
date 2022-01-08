import { CreateData } from "../../../../src/app/service/WMHService";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

describe("[CreateData] tests case", () => {
  it("Should create a new residenceAddress", async () => {
    const residenceFeaturesData = {
      ResidenceId: 1,
      key: "metroFlag",
      value: "true",
    };

    const createData = new CreateData();
    const response = await createData.create(
      residenceFeaturesData,
      "residenceFeatures"
    );

    expect(response).toBeTruthy();
    expect(response.key).toBe("metroFlag");
  });
});
