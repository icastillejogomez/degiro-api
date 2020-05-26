// Import modules
import fetch, { RequestInit } from 'node-fetch'

// Import types
import { OrderType, AccountDataType, AccountConfigType } from '../types'

// Import debug console log
import { debug } from '../utils'

export function createOrderRequest(order: OrderType, accountData: AccountDataType, accountConfig: AccountConfigType): Promise<string> {
  return new Promise((resolve, reject) => {

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(order),
    }

    const uri = `${accountConfig.data.tradingUrl}v5/checkOrder;jsessionid=${accountConfig.data.sessionId}?intAccount=${accountData.data.intAccount}&sessionId=${accountConfig.data.sessionId}`
    debug(uri, requestOptions)
    fetch(uri, requestOptions)
      .then((res) => {
        console.log(res)
        return res.json()
      })
      .then((res) => {
        console.log(res)
      })
      .catch(reject)

  })
}