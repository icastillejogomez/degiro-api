import { PORTFOLIO_POSITIONS_TYPE_ENUM } from '../enums/DeGiroEnums'

export type GetPorfolioConfigType = {
  type: PORTFOLIO_POSITIONS_TYPE_ENUM,
  getProductDetails?: boolean,
}
