// Import types
import { AccountConfigType, AccountDataType, AccountReportsType } from '../types'

// Import debug console log
import { debug } from '../utils'

// Import utils functions
import { generateReportURIFromID } from '../utils/generateReportURIFromID'

// Importamos constantes
import { DEGIRO_API_PATHS } from '../enums'
const { GET_ACCOUNT_REPORTS_PATH } = DEGIRO_API_PATHS

export function getAccountReportsRequest(accountData: AccountDataType, accountConfig: AccountConfigType): Promise<AccountReportsType> {
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
        Cookie: `JSESSIONID=${accountConfig.data.sessionId};`,
      },
      credentials: 'include',
      referer: 'https://trader.degiro.nl/trader/',
    }

    // Do the request to get a account config data
    const uri = `${accountConfig.data.paUrl}${GET_ACCOUNT_REPORTS_PATH}?intAccount=${accountData.data.intAccount}&sessionId=${accountConfig.data.sessionId}`
    debug(`Making request to ${uri}`)
    fetch(uri, requestOptions)
      .then(res => res.json())
      .then((res) => {
        debug('Response:\n', JSON.stringify(res, null, 2))
        let data: AccountReportsType = res.data

        // Añadimos la URL de descarga del archivo para que sea más facil en cliente
        data = data.map(report => ({
          ...report,
          uri: generateReportURIFromID(report.id, accountData, accountConfig),
        }))
        resolve(data)
      })
      .catch(reject)

  })
}