// Import modules
import fetch, { RequestInit } from 'node-fetch'

// Import types
import { AccountConfigType, AccountDataType, GetPorfolioConfigType } from '../types'

// Import debug console log
import { debug, processPortfolio } from '../utils'

// tslint:disable-next-line: max-line-length
export function getPortfolioRequest(sessionId: string, accountData: AccountDataType, accountConfig: AccountConfigType, config: GetPorfolioConfigType): Promise<any[]> {
  return new Promise((resolve, reject) => {
    // Create params to reach portfolio
    const params = '&portfolio=0'

    // Do the request to get a account config data
    debug(`Making request to ${accountConfig.data.tradingUrl}v5/update/${accountData.data.intAccount};jsessionid=${sessionId}?${params}}`)
    fetch(`${accountConfig.data.tradingUrl}v5/update/${accountData.data.intAccount};jsessionid=${sessionId}?${params}`)
      .then(res => res.json())
      .then((res) => {
        const portfolio: any[] = res.portfolio.value
        const positions = processPortfolio(portfolio, config)
        resolve(positions)
      })
      .catch(reject)
  })
}