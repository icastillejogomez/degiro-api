// Import modules
import fetch, { RequestInit } from 'node-fetch'

// Import types
import { AccountConfigType } from '../types'

// Import enums
import { MainDeGiroConsts } from '../enums'
const { BASE_API_URL, GET_ACCOUNT_CONFIG_PATH } = MainDeGiroConsts

// Import debug console log
import { debug } from '../utils'

export function getAccountConfigRequest(sessionId: string): Promise<AccountConfigType> {
  return new Promise((resolve, reject) => {

    const requestOptions: RequestInit = {
      headers: {
        Cookie: `JSESSIONID=${sessionId};`,
      },
    }

    // Do the request to get a account config data
    debug(`Making request to ${BASE_API_URL}${GET_ACCOUNT_CONFIG_PATH} with JSESSIONID: ${sessionId}`)
    fetch(BASE_API_URL + GET_ACCOUNT_CONFIG_PATH, requestOptions)
      .then(res => res.json())
      .then((res: AccountConfigType) => {
        debug('Response:\n', JSON.stringify(res, null, 2))
        resolve(res)
      })
      .catch(reject)

  })
}