// Import types
import { AccountDataType, AccountConfigType } from '../types'

// Import debug console log
import { debug, getFetchRequestOptions } from '../utils'

export function getAccountDataRequest(accountConfig: AccountConfigType): Promise<AccountDataType> {
  return new Promise((resolve, reject) => {

    const requestOptions = getFetchRequestOptions(accountConfig.data.sessionId)

    // Do the request to get a account config data
    debug(`Making request to ${accountConfig.data.paUrl}client?sessionId=${accountConfig.data.sessionId}`)
    fetch(`${accountConfig.data.paUrl}client?sessionId=${accountConfig.data.sessionId}`, requestOptions)
      .then(res => res.json())
      .then((res: AccountDataType) => {
        debug('Response:\n', JSON.stringify(res, null, 2))
        resolve(res)
      })
      .catch(reject)
  })
}
