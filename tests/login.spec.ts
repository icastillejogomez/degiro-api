// Importamos código ha probar
import DeGiro from '../src/main'

// Importamos código para probar
import { expect } from 'chai'
import 'mocha'

// Realizamos las pruebas
describe('DeGiro login process', () => {

  it('should successfully log in with environment credentials', async () => {

    // Creamos la instancia del objecto y comprobamos que se ha creado bien
    const degiro = new DeGiro()
    expect(degiro).to.exist
    expect(degiro).to.be.a('object')
    expect(degiro).to.be.instanceOf(DeGiro)

    // Iniciamos el proceso de login, procesamos el then, dejamos sin procesar el catch y devolvemos la promesa
    return degiro.login().then(() => {})
  })

  it('should login with previous jsessionId', async () => {
    // Creamos la instancia del objecto y comprobamos que se ha creado bien
    const degiroAux = new DeGiro()
    expect(degiroAux).to.exist
    expect(degiroAux).to.be.a('object')
    expect(degiroAux).to.be.instanceOf(DeGiro)

    // Hacemos login y esperamos con que no falle para obtener un jsessionId
    const loginPromiseAux = degiroAux.login()
    expect(loginPromiseAux).not.be.rejected
    loginPromiseAux.then(() => {
      // Obtenemos el jsessionID
      const jsessionId = degiroAux.getJSESSIONID()
      expect(jsessionId).exist
      expect(jsessionId).not.to.be.null
      expect(jsessionId).to.be.a('string')
      expect(jsessionId).to.have.length

      // Creamos el degiro a testear y le pasamos el jsession valido del anterior objeto
      const degiro = new DeGiro({ jsessionId })
      const loginPromise = degiro.login()
      expect(loginPromise).not.be.rejected
      loginPromise
        .then((accountData) => {
          expect(accountData).exist
        })
        .catch((error) => {
          console.error(error)
          expect(error).not.exist
        })
        .finally(() => {
          // Cuando hemos acabado todo cerramos sesion
          degiroAux.logout() // <-- Cerramos sesión pero nos "da igual que falle o no"
        })

    })
  })

  describe('DeGiro secure login process', () => {

    it('should return false before sign in', async () => {
      try {
        const degiro = new DeGiro()
        expect(await degiro.isLogin({ secure: true })).to.be.eq(false)
      } catch (error) {
        console.error(error)
        expect(error).not.exist
      }
    })

    it('should return true after sign in', async () => {
      const degiro = new DeGiro()
      try {
        await degiro.login()
        expect(await degiro.isLogin({ secure: true })).to.be.eq(true)
        await degiro.logout()
      } catch (error) {
        console.error(error)
        expect(error).not.exist
      }
    }).timeout(10000)

    it('should return false after log out', async () =>{
      const degiro = new DeGiro()
      try {
        await degiro.login()
        await degiro.logout()
        expect(await degiro.isLogin({ secure: true })).to.be.eq(false)
      } catch (error) {
        console.error(error)
        expect(error).not.exist
      }
    }).timeout(10000)

    it('should return false when jsessionid is not valid yet and isLogin with secure = false response true yet (secure nice-to-have case)', async () => {
      try {
        const degiro = new DeGiro()
        await degiro.login()
        const degiroAux = new DeGiro({ jsessionId: degiro.getJSESSIONID() })
        await degiroAux.login()
        expect(await degiro.isLogin({ secure: true })).to.be.eq(true)
        expect(await degiroAux.isLogin({ secure: true })).to.be.eq(true)

        // Cerramos sesion desde el aux
        await degiroAux.logout()

        expect(degiro.isLogin()).to.be.eq(true)
        expect(await degiro.isLogin({ secure: true })).to.be.eq(false)

        expect(degiroAux.isLogin()).to.be.eq(false)
        expect(await degiroAux.isLogin({ secure: true })).to.be.eq(false)

      } catch (error) {
        console.error(error)
        expect(error).not.exist
      }
    })

  })

})
