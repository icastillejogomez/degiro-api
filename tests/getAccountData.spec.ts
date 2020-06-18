// Importamos código ha probar
import DeGiro from '../src/main'

// Importamos código para probar
import { expect } from 'chai'
import 'mocha'

// Realizamos las pruebas
describe('DeGiro getAccountData', () => {

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

})
