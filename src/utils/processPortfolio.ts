import { GetPorfolioConfigType } from '../types'
import { PORTFOLIO_POSITIONS_TYPE_ENUM } from '../enums/DeGiroEnums'

/**
 * Transform the object format of a portfolio position
 * @param position
 */
const processPosition = (position: any) => {
  const result = {}
  for (let i = 0; i < position.value.length; i++) {
    if (position.value[i].value) {
      Object.assign(result, {
        [position.value[i].name]: position.value[i].value,
      })
    }
  }
  return result
}

/**
 * Apply filter to get only open or closed positions or get all available positions
 * @param config
 */
const filterPorfolio = (config: GetPorfolioConfigType) => (position: any) => {
  // Check (non-check) all positions
  if (config.type === PORTFOLIO_POSITIONS_TYPE_ENUM.ALL) return true

  // Check if ID is not a number
  if (isNaN(parseInt(position.id, 10)) || position.positionType !== 'PRODUCT') return false

  if (config.type === PORTFOLIO_POSITIONS_TYPE_ENUM.ALL_POSITIONS) return true

  // Check if size is not 0
  if (config.type === PORTFOLIO_POSITIONS_TYPE_ENUM.OPEN && position.size !== undefined) return parseFloat(position.size) !== 0

  // Check if size is zero
  if (config.type === PORTFOLIO_POSITIONS_TYPE_ENUM.CLOSED) return position.size === undefined || parseFloat(position.size) === 0
  return false
}

export function processPortfolio(positions: any[], config: GetPorfolioConfigType): any[] {
  const results = positions
    .map(processPosition)
    .filter(filterPorfolio(config))
  return results
}