// Import modules
import fetch, { RequestInit } from 'node-fetch'

// Import types
import { AccountDataType, AccountConfigType } from '../types'

// Import debug console log
import { debug } from '../utils'

export function getAccountDataRequest(sessionId: string, accountConfig: AccountConfigType): Promise<AccountDataType> {
  return new Promise((resolve, reject) => {

    const requestOptions: RequestInit = {
      headers: {
        Cookie: `JSESSIONID=${sessionId};`,
      },
    }

    // Do the request to get a account config data
    debug(`Making request to ${accountConfig.data.paUrl}client?sessionId=${sessionId}`)
    fetch(`${accountConfig.data.paUrl}client?sessionId=${sessionId}`, requestOptions)
      .then(res => res.json())
      .then((res: AccountDataType) => {
        debug('Response:\n', JSON.stringify(res, null, 2))
        resolve(res)
      })
      .catch(reject)
  })
}