// Importamos código ha probar
import DeGiro from '../src/main'

// Importamos código para probar
import { expect } from 'chai'
import 'mocha'

describe('DeGiro getJSESSIONID', () => {

  it('should return a valid jsessionId', async () => {
    // Creamos la instancia del objecto y comprobamos que se ha creado bien
    const degiro = new DeGiro()
    expect(degiro).to.exist
    expect(degiro).to.be.a('object')
    expect(degiro).to.be.instanceOf(DeGiro)

    // Hacemos login y esperamos con que no falle
    const loginPromise = degiro.login()
    expect(loginPromise).not.be.rejected
    loginPromise.then(() => {
      const jsessionId = degiro.getJSESSIONID()
      expect(jsessionId).to.exist
      expect(jsessionId).not.to.be.null
      expect(jsessionId).to.be.a('string')
      expect(jsessionId).to.have.length

      degiro.logout() // <-- Cerramos sesión pero nos "da igual que falle o no"
    })
  })

})