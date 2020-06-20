import { CashFoundType } from '../types'

type ObjectDataType = {
  value: [],
}

type DataToParseObjectType = {
  name: string,
  value: any,
  isAdded: boolean,
}

export const processGetCashFundsResultListObject = (objectData: ObjectDataType): CashFoundType => {
  const arrayDataToExtract = objectData.value
  const result = {}
  for (let i = 0 ; i < arrayDataToExtract.length ; i++) {
    const data: DataToParseObjectType = arrayDataToExtract[i]
    if (data.isAdded) {
      Object.assign(result, {
        [data.name]: data.value,
      })
    }
  }
  return <CashFoundType>result
}