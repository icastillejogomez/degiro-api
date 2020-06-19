export type AccountInfoType = {
  baseCurrency: string,
  cashFunds: AccountInfoCashFunds,
  clientId: number,
  compensationCapping: number,
  currencyPairs: AccountInfoCurrencyPairs,
  marginType: string,
}

type CashFund = {
  id: number,
  name: string,
  productIds: number[],
}

type AccountInfoCashFunds = {
  [key: string]: CashFund[],
}

type AccountInfoCurrencyPairs = {
  [key: string]: {
    id: number,
    price: string,
  },
}