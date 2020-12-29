// Import types
import { AccountConfigType, AccountDataType, StockType, GetPopularStocksConfigType } from '../types'

// Import debug console log
import { debug } from '../utils'

// Importamos constantes
import { DEGIRO_API_PATHS } from '../enums'
const { STOCKS_SEARCH_PATH } = DEGIRO_API_PATHS

// tslint:disable-next-line: max-line-length
export function getPopularStocksRequest(accountData: AccountDataType, accountConfig: AccountConfigType, config: GetPopularStocksConfigType): Promise<StockType[]> {
  return new Promise((resolve, reject) => {

    // Create fetch request options
    const requestOptions: {
      method?: string,
      body?: string,
      headers: {
        [key: string]: string,
      },
      credentials: 'include',
      referer: string,
    } = {
      headers: {
        Cookie: `JSESSIONID=${accountConfig.data.sessionId};`,
      },
      credentials: 'include',
      referer: 'https://trader.degiro.nl/trader/',
    }

    // Create params to reach popular stocks
    const { popularOnly = true, requireTotal = false, limit = 9, offset = 0 } = config
    let params = ''
    params += `popularOnly=${popularOnly}&`
    params += `requireTotal=${requireTotal}&`
    params += `offset=${offset}&`
    params += `limit=${limit}&`
    params += `intAccount=${accountData.data.intAccount}&`
    params += `sessionId=${accountConfig.data.sessionId}`

    // Do the request to get a account config data
    const url = `${accountConfig.data.productSearchUrl}${STOCKS_SEARCH_PATH}?${params}`
    debug(`Making request to ${url} with params: \n${requestOptions}`)
    fetch(url, requestOptions)
      .then(res => res.json())
      .then((res) => {
        resolve(res.products)
      })
      .catch(reject)
  })
}