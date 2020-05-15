// Import modules
import * as async from 'async'

// Import interfaces
import { DeGiroClassInterface } from './interfaces'

// Import types
import { DeGiroSettupType, LoginResponseType, AccountConfigType, AccountDataType, CashFoundType, PortfolioPositionType, GetPorfolioConfigType } from './types'

// Import requests
import { loginRequest, getAccountConfigRequest, getAccountDataRequest, getPortfolioRequest, getProductsByIdsRequest } from './requests'

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

  getCashFunds(): CashFoundType[] {
    throw new Error('Method not implemented.')
  }

  getPortfolio(config: GetPorfolioConfigType): Promise<any[]> {
    return new Promise((resolve, reject) => {
      if (!this.loginResponse || !this.loginResponse.sessionId || !this.accountData || !this.accountConfig) {
        return reject('No session id found.')
      }
      getPortfolioRequest(this.loginResponse.sessionId, this.accountData, this.accountConfig, config)
        .then(portfolio => this.completePortfolioDetails(portfolio, config.getProductDetails || false))
        .then(resolve)
        .catch(reject)
    })
  }

  completePortfolioDetails(portfolio: any[], getProductDetails: boolean): Promise<any[]> {
    if (!getProductDetails) return Promise.resolve(portfolio)
    return new Promise((resolve, reject) => {
      async.map(portfolio, (position, next) => {
        if (position.positionType !== 'PRODUCT') return next(null, position)
        this.getProductsByIds([(position.id)])
          .then((product) => {
            position.productData = product[position.id]
            next(null, position)
          })
          .catch(error => next(error))
      // tslint:disable-next-line: align
      }, (error, portfolio) => {
        if (error) return reject(error)
        resolve(portfolio)
      })
    })
  }

  getProductsByIds(ids: string[]): Promise<any[]> {
    if (!this.loginResponse || !this.loginResponse.sessionId || !this.accountConfig || !this.accountData) {
      return Promise.reject('No session id found.')
    }
    return getProductsByIdsRequest(ids, this.loginResponse.sessionId, this.accountData, this.accountConfig)
  }

  printConfig(): void {
    console.log({
      username: this.username,
      pwd: this.pwd,
    })
  }

}