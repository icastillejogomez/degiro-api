import { CashFoundType, DeGiroSettupType } from "../types";
import { PortfolioPositionType } from "../types";
import { DeGiro } from "../DeGiro";

/**
 * @interface DeGiroClassInterface
 */
export interface DeGiroClassInterface {
  
  login(): never

  getCashFunds(): Array<CashFoundType>

  getPortfolio(): Array<PortfolioPositionType>

  // setOrder

  // searchProduct

  // askBidPrice

  // getProductsById

  // getClientInfo

  printConfig(): void

  printConfig(): void

}
