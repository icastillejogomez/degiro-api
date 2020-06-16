// Importamos código ha probar
import DeGiro from '../src/main'

// Importamos código para probar
import { expect, should } from 'chai'
import 'mocha'

// Realizamos las pruebas
describe('Environment variables', () => {

  it('DEGIRO_USER env var should exists', async () => {
    const DEGIRO_USER = process.env['DEGIRO_USER']
    expect(DEGIRO_USER).to.be.a('string')
    expect(DEGIRO_USER).not.to.be.empty
  })

  it('DEGIRO_PWD env var should exists', async () => {
    const DEGIRO_PWD = process.env['DEGIRO_PWD']
    expect(DEGIRO_PWD).to.be.a('string')
    expect(DEGIRO_PWD).not.to.be.empty
  })

})

describe('Create DeGiro instance', () => {

  it('should create an instance of DeGiro class from env vars', async () => {
    const DEGIRO_USER = process.env['DEGIRO_USER']
    const DEGIRO_PWD = process.env['DEGIRO_PWD']

    expect(DEGIRO_USER).to.be.a('string')
    expect(DEGIRO_USER).not.to.be.empty
    expect(DEGIRO_PWD).to.be.a('string')
    expect(DEGIRO_PWD).not.to.be.empty

    const degiro = new DeGiro()
    expect(degiro).to.exist
    expect(degiro).to.be.a('object')
    expect(degiro).to.be.instanceOf(DeGiro)

  })

  it('should create an instance of DeGiro class from constructor params', async () => {
    const DEGIRO_USER = process.env['DEGIRO_USER']
    const DEGIRO_PWD = process.env['DEGIRO_PWD']

    expect(DEGIRO_USER).to.be.a('string')
    expect(DEGIRO_USER).not.to.be.empty
    expect(DEGIRO_PWD).to.be.a('string')
    expect(DEGIRO_PWD).not.to.be.empty

    const degiro = new DeGiro({
      username: DEGIRO_USER,
      pwd: DEGIRO_PWD,
    })

    expect(degiro).to.exist
    expect(degiro).to.be.a('object')
    expect(degiro).to.be.instanceOf(DeGiro)
  })
  
})