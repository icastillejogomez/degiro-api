// Import types
import { OrderType, AccountDataType, AccountConfigType, CreateOrderResultType } from '../types'

// Import debug console log
import { debug, getFetchRequestOptions } from '../utils'

export function executeOrderRequest(order: OrderType, executeId: String, accountData: AccountDataType, accountConfig: AccountConfigType): Promise<String> {
  return new Promise((resolve, reject) => {

    const requestOptions = getFetchRequestOptions(accountConfig.data.sessionId, 'POST', JSON.stringify(order), 'application/json;charset=UTF-8')

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
