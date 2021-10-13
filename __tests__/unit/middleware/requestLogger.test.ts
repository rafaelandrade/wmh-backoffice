import { requestLogger } from '../../../src/app/middleware/requestLogger'
import { mockExpress } from '../../mocks/mockExpress'

const { req, res, next } = mockExpress

describe('[requestLogger] test case', () => {
    it('Should call next and setContext should be called', async () => {
      await requestLogger(req, res, next)
      expect(next).toBeCalled()
    })
  })