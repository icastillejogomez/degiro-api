// Import types
import { AccountDataType, AccountConfigType } from '../types'

// Import debug console log
import { debug } from '../utils'

export function deleteOrderRequest(orderId: String, accountData: AccountDataType, accountConfig: AccountConfigType): Promise<void> {
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
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: '',
      credentials: 'include',
      referer: 'https://trader.degiro.nl/trader/',
    }

    // tslint:disable-next-line: max-line-length
    const uri = `https://trader.degiro.nl/trading/secure/v5/order/${orderId};jsessionid=${accountConfig.data.sessionId}?intAccount=${accountData.data.intAccount}&sessionId=${accountConfig.data.sessionId}`
    debug(uri, requestOptions)
    fetch(uri, requestOptions)
      .then(res => res.json())
      .then((res) => {
        debug(res)
        if (res.errors) return reject(res.errors)
        resolve()
      })
      .catch(reject)

  })
}
