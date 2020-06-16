// Import modules
import fetch, { RequestInit } from 'node-fetch'

// Import types
import { AccountConfigType, AccountDataType } from '../types'

// Import debug console log
import { debug } from '../utils'

// tslint:disable-next-line: max-line-length
export function getProductsByIdsRequest(ids: string[], sessionId: string, accountData: AccountDataType, accountConfig: AccountConfigType): Promise<any[]> {
  return new Promise((resolve, reject) => {

    const requestOptions: RequestInit = {
      method: 'POST',
      body: JSON.stringify(ids.map(id => id.toString())),
      headers: {
        'Content-Type': 'application/json',
      },
    }

    fetch(`${accountConfig.data.productSearchUrl}v5/products/info?intAccount=${accountData.data.intAccount}&sessionId=${sessionId}`, requestOptions)
      .then(res => res.json())
      .then(res => resolve(res.data))
      .catch(reject)
  })
}