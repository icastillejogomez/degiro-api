import { DEGIRO_API_PATHS } from "../enums";
import { AccountConfigType, AccountDataType, GetTransactionsOptionsType, TransactionType } from "../types"
import { debug } from "../utils";
const { GET_TRANSACTIONS_PATH } = DEGIRO_API_PATHS;

export function getTransactionsRequest(accountData: AccountDataType, accountConfig: AccountConfigType, config: GetTransactionsOptionsType): Promise<TransactionType[]> {
    return new Promise((resolve, reject) => {
      // Create params to get orders by types
      let params = ''
      params += `fromDate=${encodeURIComponent(config.fromDate)}&`
      params += `toDate=${encodeURIComponent(config.toDate)}&`
      params += `groupTransactionsByOrder`
      params += `intAccount=${accountData.data.intAccount}&`
      params += `sessionId=${accountConfig.data.sessionId}`
  
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
      const uri = `${accountConfig.data.reportingUrl}${GET_TRANSACTIONS_PATH}?${params}`
      debug(`Making request to ${uri}`)
      fetch(uri, requestOptions)
        .then(res => res.json())
        .then((res) => {
          resolve(res.data);
        })
        .catch(reject)
    })
  }