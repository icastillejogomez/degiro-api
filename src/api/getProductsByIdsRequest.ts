// Import types
import { AccountConfigType, AccountDataType } from '../types'

// Import debug console log
import { debug, getFetchRequestOptions } from '../utils'

// tslint:disable-next-line: max-line-length
export function getProductsByIdsRequest(ids: string[], accountData: AccountDataType, accountConfig: AccountConfigType): Promise<any[]> {
  return new Promise((resolve, reject) => {

    // tslint:disable-next-line: max-line-length
    const body = JSON.stringify(ids.map(id => id.toString()))
    const requestOptions = getFetchRequestOptions(accountConfig.data.sessionId, 'POST', body, 'application/json')

    fetch(`${accountConfig.data.productSearchUrl}v5/products/info?intAccount=${accountData.data.intAccount}&sessionId=${accountConfig.data.sessionId}`, requestOptions)
      .then(res => res.json())
      .then(res => resolve(res.data))
      .catch(reject)
  })
}
