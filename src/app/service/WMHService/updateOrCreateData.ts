import { Request } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateOrCreateData = async (request: Request): Promise<Array<string>> => {
  const { dataWMH } = request.body;

  // const { residenceCode, source, urlSource, numberRooms, numberBathrooms, numberParkingSpace, typeBuilding, sizeResidence, ResidenceAddressId } = dataWMH

  return prisma.residenceAddress.create({
    data: {
      street: "street dos bobos",
      numberResidence: 1,
      district: "potatoes",
      state: "sp",
      country: "brazil",
      CEP: "1412121",
      complement: "afasdfasfas",
    },
  });
};

export { updateOrCreateData };
