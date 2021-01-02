import DeGiro from '../src/main'

import { expect } from 'chai'
import 'mocha'
import { PriceType } from '../src/types'
import { GetPricePeriod, GetPriceResolution } from '../src/types/GetPriceOptionsType'
import { TESLA_STOCK } from './test_constants'
import { VWDObject } from '../src/types/PriceType'

describe('DeGiro getPrice', () => {

  it('Should return prices', async () => {
    try {
      const degiro = new DeGiro()
      await degiro.login()
      const priceData: PriceType = await degiro.getPrice({
        resolution: GetPriceResolution.PT1D,
        period: GetPricePeriod.P1D,
        culture: 'nl-NL',
        timezone: 'Europe/Amsterdam',
        vwdId: TESLA_STOCK.VWDID
      });

      expect(priceData).to.be.a('object')
      expect(priceData.requestid).to.equal('1')

      expect(priceData.start).to.be.a("Date")
      expect(priceData.end).to.be.a("Date")
      expect(priceData.start).to.be.below(priceData.end)

      expect(priceData.resolution).to.be.a("string")

      expect(priceData.series).to.be.a('array')

      let object:VWDObject = priceData.series[0].data as VWDObject;
      let data = priceData.series[1].data as Array<Array<number>>;

      expect(object).to.exist
      expect(data).to.exist

      expect(object.isin).to.equal(TESLA_STOCK.ISIN)

      expect(data).to.be.a("array")
      expect(data[0]).to.be.a("array")

      //Could add more tests, but this seems to cover the basics.
    } catch (error) {
      console.error(error)
      expect(error).not.exist
    }
  }).timeout(10000)
})