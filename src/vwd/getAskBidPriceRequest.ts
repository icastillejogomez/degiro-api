// Import modules
import fetch, { RequestInit } from 'node-fetch'

// Import types
import { OrderType, AccountDataType, AccountConfigType, CreateOrderResultType, VwdSessionType } from '../types'

// Import Consts
import { DEGIRO_API_PATHS } from '../enums'
const { CREATE_ORDER_PATH } = DEGIRO_API_PATHS

// Import debug console log
import { debug } from '../utils'

export function getAskBidPriceRequest(
    productId: string | number,
    vwdSession: VwdSessionType,
  ): Promise<any> {
  return new Promise((resolve, reject) => {

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        Origin: 'https://trader.degiro.nl',
      },
      body: JSON.stringify({
        controlData: `req(${productId}.BidPrice);req(${productId}.AskPrice);req(${productId}.LastPrice);req(${productId}.LastTime);`,
      }),
    }

    const uri = `https://degiro.quotecast.vwdservices.com/CORS/${vwdSession.sessionId}`
    debug(uri, requestOptions)
    fetch(uri, requestOptions)
      .then(res => {
        return res.text()
      })
      .then((res) => {
        resolve(res)
      })
      .catch(reject)

  })
}