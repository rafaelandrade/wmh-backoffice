import { PrismaClient } from "@prisma/client";
import { UpdateData } from "../../../../src/app/service/WMHService";

const prisma = new PrismaClient();

describe("[updateData] tests case", () => {
  it("Should update an residenceAddress", async () => {
    const whereObject = {
      id: 2,
    };
    const dataMock = {
      street: "New street",
    };

    const updateData = new UpdateData();
    const response = await updateData.update(
      whereObject,
      dataMock,
      "residenceAddress"
    );

    expect(response).toBeTruthy();
  });
});
