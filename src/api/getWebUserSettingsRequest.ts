// Import types
import { AccountConfigType, AccountDataType, WebUserSettingType } from '../types'

// Import debug console log
import { debug, getFetchRequestOptions } from '../utils'

// Importamos constantes
import { DEGIRO_API_PATHS } from '../enums'
const { GET_WEB_USER_SETTINGS_PATH } = DEGIRO_API_PATHS

export function getWebUserSettingsRequest(accountData: AccountDataType, accountConfig: AccountConfigType): Promise<WebUserSettingType> {
  return new Promise((resolve, reject) => {

    const requestOptions = getFetchRequestOptions(accountConfig.data.sessionId)

    // Do the request to get a account config data
    const uri = `${accountConfig.data.paUrl}${GET_WEB_USER_SETTINGS_PATH}?intAccount=${accountData.data.intAccount}&sessionId=${accountConfig.data.sessionId}`
    debug(`Making request to ${uri}`)
    fetch(uri, requestOptions)
      .then(res => res.json())
      .then((res) => {
        debug('Response:\n', JSON.stringify(res, null, 2))
        const data: WebUserSettingType = res.data
        resolve(data)
      })
      .catch(reject)

  })
}
