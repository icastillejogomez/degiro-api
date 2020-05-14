// Import interfaces
import { DeGiroClassInterface } from './interfaces'

// Import types
import { DeGiroSettupType, PortfolioPositionType } from './types'


/**
 * @class DeGiro
 * @description Main class of DeGiro Unofficial API.
 */
export class DeGiro implements DeGiroClassInterface{

  private readonly username: string
  private readonly pwd: string
    
  constructor(params: DeGiroSettupType) {
    this.username = params.username
    this.pwd = params.pwd
  }

  static create(params: DeGiroSettupType): DeGiro {
    return new DeGiro(params)
  }

  login(): never {
    throw new Error("Method not implemented.")
  }

  getCashFunds(): import("./types/CashFoundType").CashFoundType[] {
    throw new Error("Method not implemented.")
  }

  getPortfolio(): import("./types/PortfolioPositionType").PortfolioPositionType[] {
    throw new Error("Method not implemented.")
  }

  printConfig(): void {
    console.log({
      username: this.username,
      pwd: this.pwd,
    })
  }

}