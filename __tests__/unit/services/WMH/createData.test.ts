import { PrismaClient } from '@prisma/client'
import { CreateData } from '../../../../src/app/service/WMHService'

const prisma = new PrismaClient()

describe("[CreateData] tests case", () => {
    it("Should create a new residenceAddress", async () => {
        const residenceAddress = {
            street: 'Potatoes street',
            numberResidence: 22,
            district: 'Potatoes district',
            state: 'PT',
            country: 'Potatoes country',
            CEP: '1211212121',
            complement: 'Next at potatolandia'
        }
        
        prisma.residenceAddress.create = jest.fn().mockResolvedValue(residenceAddress)
        const createData = new CreateData()
        const response = await createData.create(residenceAddress, 'residenceAddress')

        expect(response).toBeTruthy()
    })
})
