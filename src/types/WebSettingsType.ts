type MarketPageIndex = {
  closePrice: number,
  country: string,
  name: string,
  vwdId: string,
  id: number,
}

type MarketPageFuture = {
  country: string,
  name: string,
  vwdId: string,
  id: number,
}

type MarketPageCurrency = {
  fromCountry: string,
  toCountry: string,
  name: string,
  vwdId: string,
  id: number,
}

type MarketPageChartIndex = {
  closePrice: number,
  country: string,
  name: string,
  vwdId: string,
  id: number,
}

export type WebSettingsType = {
  defaultMarketMoversIndexId: number,
  marketMoversIndexIds: number[],
  marketPageChartIndex: MarketPageChartIndex,
  marketPageIndices: MarketPageIndex[],
  marketPageFutures: MarketPageFuture[],
  marketPageCurrencies: MarketPageCurrency[],
  defaultStockCountryId: number,
  defaultStockListType: string,
  defaultStockListId: number,
  defaultOptionExchangeId: number,
  defaultOptionCountryId: number,
  defaultOptionUnderlyingIsin: string,
  defaultFutureExchangeId: number,
  defaultFutureCountryId: number,
  defaultFutureUnderlyingIsin: string,
  defaultLeveragedExchangeId: number,
  defaultLeveragedShortLong: number,
  defaultLeveragedIssuerId: number,
  defaultLeveragedUnderlyingId: number,
  defaultLeveragedPopularOnly: boolean,
  defaultBondIssuerType: number,
  defaultBondExchangeId: number,
  defaultFundFeeType: number,
  defaultFundIssuerId: number,
  defaultEtfExchangeId: number,
  defaultEtfFeeType: number,
  defaultEtfIssuerId: number,
  defaultEtfPopularOnly: boolean,
  defaultCfdExchangeId: number,
  defaultWarrantUnderlyingName: string,
  defaultWarrantIssuerName: string,
  decimalDelimiter: string,
  thousandDelimiter: string,
}