/* Main items */

export type StockCountry = {
  id: number,
  country: number,
  indices?: number[],
  exchanges?: number[],
}

export type BondExchange = {
  id: number,
  country: number,
  exchange: number,
  postfix?: string,
}

export type BondIssuerType = {
  id: number,
  name: string,
  translation: string,
}

export type EurexCountry = {
  id: number,
  name: string,
  exchanges: Exchange[],
  underlyingExchangeIds: number[],
}

export type FutureExchange = {
  id: number,
  name: string,
  eurexCountries?: number[],
}

export type OptionExchange = {
  id: number,
  name: string,
  exchangeId: number,
  underlyingExchangeIds?: number[],
  eurexCountries?: number[],
}

export type CombinationExchange = {
  id: number,
  name: string,
}

export type CFDExchange = {
  id: number,
  country: number,
  exchange: number,
}

export type Exchange = {
  id: number,
  name: string,
  code?: string,
  hiqAbbr: string,
  country: string,
  city?: string,
  micCode?: string,
}

export type Index = {
  id: number,
  name: string,
  productId?: number,
}

export type Region = {
  id: number,
  name: string,
  translation: string,
}

export type Country = {
  id: number,
  name: string,
  translation: string,
  region: number,
}

/* Types */

type ProductTypes = {
  id: number,
  name: string,
  translation: string,
  briefTranslation: string,
  contractType: string,
}

/* Fee Types */

type FeeType = {
  id: number,
  name: string,
  translation: string,
}

/* Aggregates */

type AggregateListItem = {
  id: string,
  name: string,
}

/* Sort arrays */

type SortListItem = {
  id: string,
}

export type ConfigDictionaryType = {

  /* Main items */

  stockCountries: StockCountry[],
  bondExchanges: BondExchange[],
  bondIssuerTypes: BondIssuerType[],
  eurexCountries: EurexCountry[],
  futureExchanges: FutureExchange[],
  optionExchanges: OptionExchange[],
  combinationExchanges: CombinationExchange[],
  cfdExchanges: CFDExchange[],
  exchanges: Exchange[],
  indices: Index[],
  regions: Region[],
  countries: Country[],

  /* Product types */

  productTypes: ProductTypes[],

  /* Fee Types */

  etfFeeTypes: FeeType[],
  investmentFundFeeTypes: FeeType[],

  /* Aggregates */

  optionAggregateTypes: AggregateListItem[],
  leveragedAggregateTypes: AggregateListItem[],
  etfAggregateTypes: AggregateListItem[],
  investmentFundAggregateTypes: AggregateListItem[],
  warrantAggregateTypes: AggregateListItem[],

  /* Sort arrays */

  lookupSortColumns: SortListItem[],
  stockSortColumns: SortListItem[],
  bondSortColumns: SortListItem[],
  cfdSortColumns: SortListItem[],
  etfSortColumns: SortListItem[],
  futureSortColumns: SortListItem[],
  investmentFundSortColumns: SortListItem[],
  leveragedSortColumns: SortListItem[],
  optionSortColumns: SortListItem[],
  warrantSortColumns: SortListItem[],
}
