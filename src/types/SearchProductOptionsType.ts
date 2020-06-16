import { DeGiroProducTypes } from '../enums/DeGiroEnums'

export type SearchProductOptionsType = {
  text: string,
  type?: DeGiroProducTypes | undefined,
  sortColumn?: string,
  sortType?: any,
  limit?: number,
  offset?: number,
}