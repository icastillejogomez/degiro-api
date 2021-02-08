// Import types
import { AccountConfigType, AccountDataType, GetPorfolioConfigType } from '../types'

// Import debug console log
import { debug, processPortfolio, getFetchRequestOptions } from '../utils'

// tslint:disable-next-line: max-line-length
export function getPortfolioRequest(accountData: AccountDataType, accountConfig: AccountConfigType, config: GetPorfolioConfigType): Promise<any[]> {
  return new Promise((resolve, reject) => {
    // Create params to reach portfolio
    const params = '&portfolio=0'

    // Do the request to get a account config data
    const requestOptions = getFetchRequestOptions(accountConfig.data.sessionId)
    const uri = `${accountConfig.data.tradingUrl}v5/update/${accountData.data.intAccount};jsessionid=${accountConfig.data.sessionId}?${params}`
    debug(`Making request to ${uri}`)
    fetch(uri, requestOptions)
      .then(res => res.json())
      .then((res) => {
        const portfolio: any[] = res.portfolio.value
        const positions = processPortfolio(portfolio, config)
        resolve(positions)
      })
      .catch(reject)
  })
}
