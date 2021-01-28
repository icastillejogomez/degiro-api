// Import types
import { AccountConfigType, AccountDataType, i18nMessagesType } from '../types'

// Import debug console log
import { debug, getFetchRequestOptions } from '../utils'

export function getWebi18nMessagesRequest(lang: string, accountData: AccountDataType, accountConfig: AccountConfigType): Promise<i18nMessagesType> {
  return new Promise((resolve, reject) => {

    const requestOptions = getFetchRequestOptions(accountConfig.data.sessionId)

    // Do the request to get a account config data
    const uri = `${accountConfig.data.i18nUrl}messages_${lang}`
    debug(`Making request to ${uri}`)
    fetch(uri, requestOptions)
      .then(res => res.json())
      .then((res) => {
        debug('Response:\n', JSON.stringify(res, null, 2))
        const data: i18nMessagesType = res.data
        resolve(data)
      })
      .catch(reject)

  })
}
