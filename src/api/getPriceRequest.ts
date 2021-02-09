// Import types
import { AccountConfigType, AccountDataType, GetPriceOptionsType, PriceType } from '../types'

// Import debug console log
import { debug } from '../utils'

// Import paths
import { DEGIRO_API_PATHS } from '../enums'
const { VWD_BASE_API_URL, VWD_GET_PRICE_PATH } = DEGIRO_API_PATHS

export function getPriceRequest(accountData: AccountDataType, accountConfig: AccountConfigType, options: GetPriceOptionsType): Promise<PriceType> {
  return new Promise(async (resolve, reject) => {

    // Generate params
    const { resolution, period, vwdId, culture, timezone } = options
    const params =
      `requestid=1&` +
      `resolution=${resolution}&` +
      `culture=${culture}&` +
      `period=${period}&` +
      `series=issueid%3A${vwdId}&` +
      `series=price%3Aissueid%3A${vwdId}&` +
      `format=json&` +
      `userToken=${accountData.data.id}&` +
      `tz=${timezone}`;

    // Generate Request options
    const requestOptions: {
      method?: string,
      body?: string,
      referer: string,
    } = {
      referer: 'https://trader.degiro.nl/trader/',
    }

    // Generate de request URIs
    const URI = `${VWD_BASE_API_URL}${VWD_GET_PRICE_PATH}?${params}`;

    // Fetch the requested price data.
    try {
      const latestFetch = await fetch(URI, requestOptions)
      const result:PriceType = await latestFetch.json();
      result.start = new Date(result.start);
      result.end = new Date(result.end);
      resolve(result)
    } catch (error) {
      return reject(error)
    }
  })
}