// Importamos código ha probar
import DeGiro from '../src/main'

// Importamos código para probar
import chai, { expect, should } from 'chai'

// Add chai as promised
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised)

import 'mocha'

// Realizamos las pruebas
describe('DeGiro logout process', () => {

  it('should successfully log out after sign in', async () => {

    // Creamos la instancia del objecto y comprobamos que se ha creado bien
    const degiro = new DeGiro()
    expect(degiro).to.exist
    expect(degiro).to.be.a('object')
    expect(degiro).to.be.instanceOf(DeGiro)

    // Iniciamos el proceso de login, procesamos el then, dejamos sin procesar el catch y devolvemos la promesa
    await degiro.login()

    return degiro.logout().then(async () => {
      expect(degiro.isLogin()).to.be.equal(false)
      expect(degiro.getAccountConfig()).to.be.rejected
      expect(degiro.getAccountData()).to.be.rejected
    })
  })

})
