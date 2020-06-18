// Importamos código ha probar
import DeGiro from '../src/main'

// Importamos código para probar
import { expect } from 'chai'
import 'mocha'

// Realizamos las pruebas
describe('DeGiro isLogin', () => {

  it('should return false before sign in', async () => {
    // Creamos la instancia del objecto y comprobamos que se ha creado bien
    const degiro = new DeGiro()

    const isLogin = degiro.isLogin()
    expect(isLogin).exist
    expect(isLogin).to.be.a('boolean')
    expect(isLogin).to.be.eq(false)
  })

  it('should return true after sign in and before log out', async () => {
    // Creamos la instancia del objecto y comprobamos que se ha creado bien
    const degiro = new DeGiro()
    const loginPromise = degiro.login()
    expect(loginPromise).not.be.rejected
    loginPromise
      .then(() => {
        const isLogin = degiro.isLogin()
        expect(isLogin).exist
        expect(isLogin).to.be.a('boolean')
        expect(isLogin).to.be.eq(true)
      })
      .catch((error) => {
        console.error(error)
        expect(error).not.exist
      })
      .finally(() => {
        if (degiro.isLogin()) degiro.logout() // <-- Nos "da igual" si falla o no
      })
  })

  it('should return false after log out', async () => {
    // Creamos la instancia del objecto y comprobamos que se ha creado bien
    const degiro = new DeGiro()
    const loginPromise = degiro.login()
    expect(loginPromise).not.be.rejected
    loginPromise
      .then(() => {
        return degiro.logout().then(() => {
          const isLogin = degiro.isLogin()
          expect(isLogin).exist
          expect(isLogin).to.be.a('boolean')
          expect(isLogin).to.be.eq(false)
        })
      })
      .catch((error) => {
        console.error(error)
        expect(error).not.exist
      })
      .finally(() => {
        if (degiro.isLogin()) degiro.logout() // <-- Nos "da igual" si falla o no
      })
  })

})
