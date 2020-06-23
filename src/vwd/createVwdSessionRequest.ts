// Import modules
import fetch, { RequestInit } from 'node-fetch'

// Import types
import { OrderType, AccountDataType, AccountConfigType, CreateOrderResultType, VwdSessionType } from '../types'

// Import Consts
import { DEGIRO_API_PATHS } from '../enums'
const { CREATE_ORDER_PATH } = DEGIRO_API_PATHS

// Import debug console log
import { debug } from '../utils'

export function createVwdSessionRequest(accountData: AccountDataType, accountConfig: AccountConfigType): Promise<VwdSessionType> {
  return new Promise((resolve, reject) => {

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        Origin: 'https://trader.degiro.nl',
      },
      body: JSON.stringify({
        referrer: 'https://trader.degiro.nl',
      }),
    }

    const uri = `https://degiro.quotecast.vwdservices.com/CORS/request_session?version=1.0.20170315&userToken=${accountData.data.id}`
    debug(uri, requestOptions)
    fetch(uri, requestOptions)
      .then(res => res.json())
      .then((res: VwdSessionType) => {
        resolve(res)
      })
      .catch(reject)

  })
}