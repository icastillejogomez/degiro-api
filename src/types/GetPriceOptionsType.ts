export enum GetPriceResolution {
  PT1D = 'PT1M',
}

export enum GetPricePeriod {
  P1D = 'P1D',
}

export type GetPriceOptionsType = {
  resolution: GetPriceResolution,
  period: GetPricePeriod,
  vwdId: string,
  culture: string,
  timezone: string,
}