// Import types
import { AccountConfigType, AccountDataType } from '../types'

// Import debug console log
import { debug } from '../utils'

// tslint:disable-next-line: max-line-length
export function getProductsByIdsRequest(ids: string[], accountData: AccountDataType, accountConfig: AccountConfigType): Promise<any[]> {
  return new Promise((resolve, reject) => {

    const requestOptions: {
      method?: string,
      body?: string,
      headers: {
        [key: string]: string,
      },
      credentials: 'include',
      referer: string,
    } = {
      method: 'POST',
      body: JSON.stringify(ids.map(id => id.toString())),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      referer: 'https://trader.degiro.nl/trader/',
    }

    fetch(`${accountConfig.data.productSearchUrl}v5/products/info?intAccount=${accountData.data.intAccount}&sessionId=${accountConfig.data.sessionId}`, requestOptions)
      .then(res => res.json())
      .then(res => resolve(res.data))
      .catch(reject)
  })
}