import DeGiro from '../src/main'

import { expect, should } from 'chai'
import 'mocha'

// Realizamos las pruebas
describe('Example test that can be executed in CI (without env variables.)', () => {

  it('DeGiro should have createOrder', async () => {
      expect(DeGiro.prototype.createOrder).to.be.a("function")
  })
})