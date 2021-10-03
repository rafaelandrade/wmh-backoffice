import { HealthController } from '../../../src/app/controllers'

import { mockExpress } from '../../mocks/mockExpress'

const { req, res, next } = mockExpress

describe('[HealthController] test case', () => {
  it('Should return message WMH-BACKOFFICE HELLO WORLD! EVERYTHING OK! in case of everything fine', () => {
    const healthController = new HealthController()

    const response = healthController.show(req, res, next)

    expect(response.status).toBeCalledWith(200)
    expect(res.json).toBeCalledWith({ message: 'WMH-BACKOFFICE HELLO WORLD! EVERYTHING OK!' })
  })
})
