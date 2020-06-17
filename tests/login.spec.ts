// Importamos código ha probar
import DeGiro from '../src/main'

// Importamos código para probar
import { expect, should } from 'chai'
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

  it('should return a valid account config from server', async () => {

    // Creamos la instancia del objecto y comprobamos que se ha creado bien
    const degiro = new DeGiro()
    expect(degiro).to.exist
    expect(degiro).to.be.a('object')
    expect(degiro).to.be.instanceOf(DeGiro)

    // Iniciamos el proceso de login, procesamos el then, dejamos sin procesar el catch y devolvemos la promesa
    await degiro.login()

    return degiro.getAccountConfig().then((accountConfig) => {
      // Check account config exists
      expect(accountConfig).to.exist
      expect(accountConfig).to.be.a('object')

      // Check account config fields
      expect(accountConfig).to.have.property('data')

      const { data } = accountConfig
      expect(data).to.have.property('tradingUrl')
      expect(data).to.have.property('paUrl')
      expect(data).to.have.property('reportingUrl')
      expect(data).to.have.property('paymentServiceUrl')
      expect(data).to.have.property('cashSolutionsUrl')
      expect(data).to.have.property('productSearchUrl')
      expect(data).to.have.property('dictionaryUrl')
      expect(data).to.have.property('productTypesUrl')
      expect(data).to.have.property('companiesServiceUrl')
      expect(data).to.have.property('i18nUrl')
      expect(data).to.have.property('vwdQuotecastServiceUrl')
      expect(data).to.have.property('vwdNewsUrl')
      expect(data).to.have.property('vwdGossipsUrl')
      expect(data).to.have.property('firstLoginWizardUrl')
      expect(data).to.have.property('taskManagerUrl')
      expect(data).to.have.property('landingPath')
      expect(data).to.have.property('betaLandingPath')
      expect(data).to.have.property('mobileLandingPath')
      expect(data).to.have.property('loginUrl')
      expect(data).to.have.property('sessionId')
      expect(data).to.have.property('clientId')

      expect(data.tradingUrl).to.be.a('string')
      expect(data.paUrl).to.be.a('string')
      expect(data.reportingUrl).to.be.a('string')
      expect(data.paymentServiceUrl).to.be.a('string')
      expect(data.cashSolutionsUrl).to.be.a('string')
      expect(data.productSearchUrl).to.be.a('string')
      expect(data.dictionaryUrl).to.be.a('string')
      expect(data.productTypesUrl).to.be.a('string')
      expect(data.companiesServiceUrl).to.be.a('string')
      expect(data.i18nUrl).to.be.a('string')
      expect(data.vwdQuotecastServiceUrl).to.be.a('string')
      expect(data.vwdNewsUrl).to.be.a('string')
      expect(data.vwdGossipsUrl).to.be.a('string')
      expect(data.firstLoginWizardUrl).to.be.a('string')
      expect(data.taskManagerUrl).to.be.a('string')
      expect(data.landingPath).to.be.a('string')
      expect(data.betaLandingPath).to.be.a('string')
      expect(data.mobileLandingPath).to.be.a('string')
      expect(data.loginUrl).to.be.a('string')
      expect(data.sessionId).to.be.a('string')
      expect(data.clientId).to.be.a('number')

      // Check important fields are not empty
      expect(data.tradingUrl).not.be.empty
      expect(data.paUrl).not.be.empty
      expect(data.reportingUrl).not.be.empty
      expect(data.productSearchUrl).not.be.empty
      expect(data.sessionId).not.be.empty

    })
  })

  it('should return a valid account data from server', async () => {

    // Creamos la instancia del objecto y comprobamos que se ha creado bien
    const degiro = new DeGiro()
    expect(degiro).to.exist
    expect(degiro).to.be.a('object')
    expect(degiro).to.be.instanceOf(DeGiro)

    // Iniciamos el proceso de login, procesamos el then, dejamos sin procesar el catch y devolvemos la promesa
    await degiro.login()

    return degiro.getAccountData().then((accountData) => {
      // Check account config exists
      expect(accountData).to.exist
      expect(accountData).to.be.a('object')

      // Check account config fields
      expect(accountData).to.have.property('data')

      const { data } = accountData
      expect(data).to.have.property('id')
      expect(data).to.have.property('intAccount')
      expect(data).to.have.property('clientRole')
      expect(data).to.have.property('effectiveClientRole')
      expect(data).to.have.property('contractType')
      expect(data).to.have.property('username')
      expect(data).to.have.property('displayName')
      expect(data).to.have.property('email')
      expect(data).to.have.property('firstContact')
      expect(data).to.have.property('address')
      expect(data).to.have.property('cellphoneNumber')
      expect(data).to.have.property('locale')
      expect(data).to.have.property('language')
      expect(data).to.have.property('culture')
      expect(data).to.have.property('bankAccount')
      expect(data).to.have.property('memberCode')
      expect(data).to.have.property('isWithdrawalAvailable')
      expect(data).to.have.property('isAllocationAvailable')
      expect(data).to.have.property('isIskClient')
      expect(data).to.have.property('isCollectivePortfolio')
      expect(data).to.have.property('isAmClientActive')
      expect(data).to.have.property('canUpgrade')

      expect(data.id).to.be.a('number')
      expect(data.intAccount).to.be.a('number')
      expect(data.clientRole).to.be.a('string')
      expect(data.clientRole).to.be.a('string')
      expect(data.effectiveClientRole).to.be.a('string')
      expect(data.contractType).to.be.a('string')
      expect(data.username).to.be.a('string')
      expect(data.displayName).to.be.a('string')
      expect(data.email).to.be.a('string')
      expect(data.firstContact).to.be.a('object')
      expect(data.address).to.be.a('object')
      expect(data.cellphoneNumber).to.be.a('string')
      expect(data.locale).to.be.a('string')
      expect(data.language).to.be.a('string')
      expect(data.culture).to.be.a('string')
      expect(data.bankAccount).to.be.a('object')
      expect(data.memberCode).to.be.a('string')
      expect(data.isWithdrawalAvailable).to.be.a('boolean')
      expect(data.isAllocationAvailable).to.be.a('boolean')
      expect(data.isIskClient).to.be.a('boolean')
      expect(data.isCollectivePortfolio).to.be.a('boolean')
      expect(data.isAmClientActive).to.be.a('boolean')
      expect(data.canUpgrade).to.be.a('boolean')

      expect(data.firstContact.firstName).to.be.a('string')
      expect(data.firstContact.firstName).to.be.a('string')
      expect(data.firstContact.lastName).to.be.a('string')
      expect(data.firstContact.displayName).to.be.a('string')
      expect(data.firstContact.nationality).to.be.a('string')
      expect(data.firstContact.gender).to.be.a('string')
      expect(data.firstContact.dateOfBirth).to.be.a('string')
      expect(data.firstContact.placeOfBirth).to.be.a('string')
      expect(data.firstContact.countryOfBirth).to.be.a('string')

      expect(data.address.streetAddress).to.be.a('string')
      expect(data.address.streetAddressNumber).to.be.a('string')
      expect(data.address.zip).to.be.a('string')
      expect(data.address.city).to.be.a('string')
      expect(data.address.country).to.be.a('string')

      expect(data.bankAccount.bankAccountId).to.be.a('number')
      expect(data.bankAccount.bic).to.be.a('string')
      expect(data.bankAccount.iban).to.be.a('string')
      expect(data.bankAccount.status).to.be.a('string')

      // Check important fields are not empty
      expect(data.id).be.greaterThan(0)
      expect(data.intAccount).be.greaterThan(0)
      expect(data.username).not.be.empty
      expect(data.displayName).not.be.empty
      expect(data.email).not.be.empty
      expect(data.memberCode).not.be.empty

    })
  })

  it('getJSESSIONID should return a valid jsessionId', async () => {
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

})
