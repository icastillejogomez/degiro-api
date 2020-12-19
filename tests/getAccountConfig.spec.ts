// Importamos código ha probar
import DeGiro from '../src/main'

// Importamos código para probar
import { expect } from 'chai'
import 'mocha'

// Realizamos las pruebas
describe('DeGiro getAccountConfig', () => {

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
      // expect(data).to.have.property('cashSolutionsUrl') This property is no longer present
      expect(data).to.have.property('productSearchUrl')
      expect(data).to.have.property('dictionaryUrl')
      expect(data).to.have.property('productTypesUrl')
      expect(data).to.have.property('companiesServiceUrl')
      expect(data).to.have.property('i18nUrl')
      expect(data).to.have.property('vwdQuotecastServiceUrl')
      expect(data).to.have.property('vwdNewsUrl')
      expect(data).to.have.property('vwdGossipsUrl')
      // expect(data).to.have.property('firstLoginWizardUrl')
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
      // expect(data.cashSolutionsUrl).to.be.a('string') This property is no longer present
      expect(data.productSearchUrl).to.be.a('string')
      expect(data.dictionaryUrl).to.be.a('string')
      expect(data.productTypesUrl).to.be.a('string')
      expect(data.companiesServiceUrl).to.be.a('string')
      expect(data.i18nUrl).to.be.a('string')
      expect(data.vwdQuotecastServiceUrl).to.be.a('string')
      expect(data.vwdNewsUrl).to.be.a('string')
      expect(data.vwdGossipsUrl).to.be.a('string')
      // expect(data.firstLoginWizardUrl).to.be.a('string')
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

})
