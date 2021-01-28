// Import types
import { SearchProductOptionsType, AccountConfigType, AccountDataType, SearchProductResultType } from '../types'

// Import debug console log
import { debug, getFetchRequestOptions } from '../utils'

const createURLQuery = (options: SearchProductOptionsType): string => {
  // Destructure the options parameter
  const { text, type = undefined, sortColumn = undefined, sortType = undefined, limit = 10, offset = 0 } = options

  // Create the query
  let res = `&searchText=${encodeURIComponent(text)}`

  if (type) res += `&type=${encodeURIComponent(type)}`
  if (sortColumn) res += `&sortColumn=${encodeURIComponent(sortColumn)}`
  if (sortType) res += `&sortType=${encodeURIComponent(sortType)}`
  if (limit) res += `&limit=${encodeURIComponent(limit)}`
  if (offset) res += `&offset=${encodeURIComponent(offset)}`

  return res
}

export function searchProductRequest(options: SearchProductOptionsType, accountData: AccountDataType, accountConfig: AccountConfigType): Promise<SearchProductResultType[]> {
  return new Promise((resolve, reject) => {
    // Preparae de request
    const params = createURLQuery(options)

    const requestOptions = getFetchRequestOptions()

    // Do de request
    const uri = `${accountConfig.data.productSearchUrl}v5/products/lookup?intAccount=${accountData.data.intAccount}&sessionId=${accountData.data.id}&${params}`
    debug(`Making a search request to url: ${uri}`)
    fetch(uri, requestOptions)
      .then(res => res.json())
      .then(({ products }) => resolve(products))
      .catch(reject)
  })
}
