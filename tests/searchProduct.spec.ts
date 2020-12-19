// Importamos código ha probar
import DeGiro from '../src/main'

// Importamos código para probar
import { expect } from 'chai'
import 'mocha'
import { DeGiroProducTypes } from '../src/enums'
import { SearchProductResultType } from '../src/types'
import { TESLA_STOCK, APPLE_STOCK } from './test_constants'

describe('DeGiro searchProduct', () => {

  it('should return Tesla ($TSLA) stock', async () => {
    try {
      const degiro = new DeGiro()
      await degiro.login()
      const products: SearchProductResultType[] = await degiro.searchProduct({
        text: 'Tesla',
        type: DeGiroProducTypes.shares,
        limit: 1,
      })

      // Check if result is an array with one result
      expect(products).to.be.a('array')
      expect(products.length).to.be.eq(1)

      // Check if the result is an object
      const result = products[0]
      expect(result).exist
      expect(result).to.be.a('object')

      // Check if is the correct object
      const { id, name, isin, symbol, exchangeId } = result
      expect(id).exist
      expect(id).to.be.a('string')
      expect(id).to.be.eq(TESLA_STOCK.ID)

      expect(name).exist
      expect(name).to.be.a('string')
      expect(name).to.be.eq(TESLA_STOCK.NAME)

      expect(isin).exist
      expect(isin).to.be.a('string')
      expect(isin).to.be.eq(TESLA_STOCK.ISIN)

      expect(symbol).exist
      expect(symbol).to.be.a('string')
      expect(symbol).to.be.eq(TESLA_STOCK.SYMBOL)

      expect(exchangeId).exist
      expect(exchangeId).to.be.a('string')
      expect(exchangeId).to.be.eq(TESLA_STOCK.EXCHANGE_ID)

      await degiro.logout()
    } catch (error) {
      console.error(error)
      expect(error).not.exist
    }
  }).timeout(10000)

  it('should return Apple Inc ($AAPL) stock', async () => {
    try {
      const degiro = new DeGiro()
      await degiro.login()
      const products: SearchProductResultType[] = await degiro.searchProduct({
        text: 'Apple',
        type: DeGiroProducTypes.shares,
        limit: 1,
      })

      // Check if result is an array with one result
      expect(products).to.be.a('array')
      expect(products.length).to.be.eq(1)

      // Check if the result is an object
      const result = products[0]
      expect(result).exist
      expect(result).to.be.a('object')

      // Check if is the correct object
      const { id, name, isin, symbol, exchangeId } = result
      expect(id).exist
      expect(id).to.be.a('string')
      expect(id).to.be.eq(APPLE_STOCK.ID)

      expect(name).exist
      expect(name).to.be.a('string')
      expect(name).to.be.eq(APPLE_STOCK.NAME)

      expect(isin).exist
      expect(isin).to.be.a('string')
      expect(isin).to.be.eq(APPLE_STOCK.ISIN)

      expect(symbol).exist
      expect(symbol).to.be.a('string')
      expect(symbol).to.be.eq(APPLE_STOCK.SYMBOL)

      expect(exchangeId).exist
      expect(exchangeId).to.be.a('string')
      expect(exchangeId).to.be.eq(APPLE_STOCK.EXCHANGE_ID)

      await degiro.logout()
    } catch (error) {
      console.error(error)
      expect(error).not.exist
    }
  }).timeout(10000)

  it('should return more that 5 items when search "a"', async () => {
    try {
      const degiro = new DeGiro()
      await degiro.login()

      // Search text "A"
      const products: SearchProductResultType[] = await degiro.searchProduct({ text: 'a', limit: 10 })

      // Check if result is an array with one result
      expect(products).to.be.a('array')
      expect(products.length).to.be.gt(5)

      await degiro.logout()
    } catch (error) {
      console.error(error)
      expect(error).not.exist
    }
  })

})