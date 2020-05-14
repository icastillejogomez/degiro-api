// Import interfaces
import { DeGiroClassInterface } from './interfaces'

// Import types
import { DeGiroSettupType, LoginResponseType, AccountConfigType, AccountDataType } from './types'

// Import requests
import { loginRequest, getAccountConfigRequest, getAccountDataRequest } from './requests'

// Import debug console log
import { debug } from './utils'

/**
 * @class DeGiro
 * @description Main class of DeGiro Unofficial API.
 */
export class DeGiro implements DeGiroClassInterface{

  private readonly username: string
  private readonly pwd: string
  private loginResponse: LoginResponseType | undefined
  private accountConfig: AccountConfigType | undefined
  private accountData: AccountDataType | undefined

  constructor(params: DeGiroSettupType) {
    const { username, pwd } = params

    if (!username) throw new Error('DeGiro api needs an username to access')
    if (!pwd) throw new Error('DeGiro api needs an password to access')

    this.username = username
    this.pwd = pwd
  }

  static create(params: DeGiroSettupType): DeGiro {
    return new DeGiro(params)
  }

  login(): Promise<void> {
    return new Promise((resolve, reject) => {
      loginRequest({ username: this.username, pwd: this.pwd })
        .then((loginResponse: LoginResponseType) => {
          this.loginResponse = loginResponse
          return this.getAccountConfig()
        })
        .then(() => this.getAccountData())
        .then((accountData) => {
          resolve()
        })
        .catch(reject)
    })
  }

  getAccountConfig(): Promise<AccountConfigType> {
    return new Promise((resolve, reject) => {
      if (!this.loginResponse || !this.loginResponse.sessionId) {
        return reject('No session id found.')
      }
      getAccountConfigRequest(this.loginResponse.sessionId)
        .then((accountConfig: AccountConfigType) => {
          this.accountConfig = accountConfig
          resolve(accountConfig)
        })
        .catch(reject)
    })
  }

  getAccountData(): Promise<AccountDataType> {
    return new Promise((resolve, reject) => {
      if (!this.loginResponse || !this.loginResponse.sessionId || !this.accountConfig) {
        return reject('No session id found.')
      }
      getAccountDataRequest(this.loginResponse.sessionId, this.accountConfig)
        .then((accountData: AccountDataType) => {
          this.accountData = accountData
          resolve(accountData)
        })
        .catch(reject)
    })
  }

  hasLogin(): boolean {
    return this.loginResponse !== undefined
  }

  getCashFunds(): import('./types/CashFoundType').CashFoundType[] {
    throw new Error('Method not implemented.')
  }

  getPortfolio(): import('./types/PortfolioPositionType').PortfolioPositionType[] {
    throw new Error('Method not implemented.')
  }

  printConfig(): void {
    console.log({
      username: this.username,
      pwd: this.pwd,
    })
  }

}