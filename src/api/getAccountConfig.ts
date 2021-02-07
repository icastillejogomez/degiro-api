// Import types
import { AccountConfigType } from '../types'

// Import enums
import { DEGIRO_API_PATHS } from '../enums'
const { BASE_API_URL, GET_ACCOUNT_CONFIG_PATH } = DEGIRO_API_PATHS

// Import debug console log
import { debug } from '../utils'

export function getAccountConfigRequest(sessionId: string): Promise<AccountConfigType> {
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
      headers: {
        Cookie: `JSESSIONID=${sessionId};`,
      },
      credentials: 'include',
      referer: 'https://trader.degiro.nl/trader/',
    }

    // Do the request to get a account config data
    debug(`Making request to ${BASE_API_URL}${GET_ACCOUNT_CONFIG_PATH} with JSESSIONID: ${sessionId}`)
    fetch(BASE_API_URL + GET_ACCOUNT_CONFIG_PATH, requestOptions)
      .then((res) => {
        if (!res.ok) { reject(res.statusText) }
        return res.json()
      })
      .then((res: AccountConfigType) => {
        debug('Response:\n', JSON.stringify(res, null, 2))
        resolve(res)
      })
      .catch(reject)

  })
}
