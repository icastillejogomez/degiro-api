// Import types
import { AccountConfigType, AccountDataType, i18nMessagesType, GetNewsOptionsType, NewsType } from '../types'

// Import debug console log
import { debug } from '../utils'

// Import paths
import { DEGIRO_API_PATHS } from '../enums'
const { GET_LATESTS_NEWS_PATH, GET_TOP_NEWS_PATH } = DEGIRO_API_PATHS

export function getNewsRequest(options: GetNewsOptionsType, accountData: AccountDataType, accountConfig: AccountConfigType): Promise<NewsType> {
  return new Promise(async (resolve, reject) => {

    // Generate params
    const { latest, top, latestOffset = 0, latestLimit = 20, languages = 'es' } = options
    let params = ''
    params += `offset=${latestOffset}&`
    params += `limit=${latestLimit}&`
    params += `languages=${languages}&`
    params += `intAccount=${accountData.data.intAccount}&`
    params += `sessionId=${accountConfig.data.sessionId}`

    // Generate Request options
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

    // Generate de request URIs
    const latestNewsURI = `${accountConfig.data.companiesServiceUrl}${GET_LATESTS_NEWS_PATH}?${params}`
    const topNewsURI = `${accountConfig.data.companiesServiceUrl}${GET_TOP_NEWS_PATH}?${params}`

    // Create de default value
    const result: NewsType = {
      latest: {
        items: [],
      },
      top: {
        items: [],
      },
    }

    // Fetch the requested news
    try {

      // Check if latest requested
      if (latest) {
        const latestFetch = await fetch(latestNewsURI, requestOptions)
        const { data } = await latestFetch.json()
        result.latest = data
      }

      // Check if top requested
      if (top) {
        const latestFetch = await fetch(topNewsURI, requestOptions)
        const { data } = await latestFetch.json()
        result.top = data
      }
    } catch (error) {
      return reject(error)
    }

    // Return te result
    resolve(result)
  })
}