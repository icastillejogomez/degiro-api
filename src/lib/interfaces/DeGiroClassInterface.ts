import { CashFoundType, AccountConfigType, PortfolioPositionType, AccountDataType } from '../types'

/**
 * @interface DeGiroClassInterface
 */
export interface DeGiroClassInterface {

  login(): Promise<void>

  hasLogin(): boolean

  getAccountConfig(): Promise<AccountConfigType>

  getAccountData(): Promise<AccountDataType>

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
