import { DeGiroActions, DeGiroMarketOrderTypes, DeGiroTimeTypes } from '../enums/DeGiroEnums'

export type OrderType = {
  buySell: DeGiroActions,
  orderType: DeGiroMarketOrderTypes,
  price?: Number,
  productId: string,
  size: number,
  stopPrice?: number,
  timeType: DeGiroTimeTypes,
}