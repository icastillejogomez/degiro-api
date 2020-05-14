import { CashFoundType, DeGiroSettupType, PortfolioPositionType } from '../types'
import { DeGiro } from '../DeGiro'

/**
 * @interface DeGiroClassInterface
 */
export interface DeGiroClassInterface {

  login(): never

  getCashFunds(): CashFoundType[]

  getPortfolio(): PortfolioPositionType[]

  // setOrder

  // searchProduct

  // askBidPrice

  // getProductsById

  // getClientInfo

  printConfig(): void

  printConfig(): void

}
