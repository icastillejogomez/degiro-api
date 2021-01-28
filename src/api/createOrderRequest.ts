// Import types
import { OrderType, AccountDataType, AccountConfigType, CreateOrderResultType } from '../types'

// Import Consts
import { DEGIRO_API_PATHS } from '../enums'
const { CREATE_ORDER_PATH } = DEGIRO_API_PATHS

// Import debug console log
import { debug, getFetchRequestOptions } from '../utils'

export function createOrderRequest(order: OrderType, accountData: AccountDataType, accountConfig: AccountConfigType): Promise<CreateOrderResultType> {
  return new Promise((resolve, reject) => {

    const requestOptions = getFetchRequestOptions(accountConfig.data.sessionId, 'POST', JSON.stringify(order), 'application/json;charset=UTF-8')

    const uri = `${accountConfig.data.tradingUrl}${CREATE_ORDER_PATH};jsessionid=${accountConfig.data.sessionId}?intAccount=${accountData.data.intAccount}&sessionId=${accountConfig.data.sessionId}`
    debug(uri, requestOptions)
    fetch(uri, requestOptions)
      .then(res => res.json())
      .then((res) => {
        if (res.errors) return reject(res.errors)
        resolve(res.data)
      })
      .catch(reject)

  })
}
