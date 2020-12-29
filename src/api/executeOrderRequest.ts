// Import types
import { OrderType, AccountDataType, AccountConfigType, CreateOrderResultType } from '../types'

// Import debug console log
import { debug } from '../utils'

export function executeOrderRequest(order: OrderType, executeId: String, accountData: AccountDataType, accountConfig: AccountConfigType): Promise<String> {
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
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(order),
      credentials: 'include',
      referer: 'https://trader.degiro.nl/trader/',
    }

    // tslint:disable-next-line: max-line-length
    const uri = `https://trader.degiro.nl/trading/secure/v5/order/${executeId};jsessionid=${accountConfig.data.sessionId}?intAccount=${accountData.data.intAccount}&sessionId=${accountConfig.data.sessionId}`
    debug(uri, requestOptions)
    fetch(uri, requestOptions)
      .then(res => res.json())
      .then((res) => {
        if (res.errors) return reject(res.errors)
        resolve(res.data.orderId)
      })
      .catch(reject)

  })
}