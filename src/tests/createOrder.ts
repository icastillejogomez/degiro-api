import DeGiro from './../main'
import { PORTFOLIO_POSITIONS_TYPE_ENUM, DeGiroActions, DeGiroOrderTypes, DeGiroTimeTypes } from '../lib/enums/DeGiroEnums'
import { OrderType } from '../lib/types'

(async () => {

  const degiro: DeGiro = new DeGiro({
    username: 'nachoogoomezomg',
    pwd: <string>process.env.DEGIRO_PWD,
  })

  await degiro.login()

  const order: OrderType = {
    buySell: DeGiroActions.BUY,
    orderType: DeGiroOrderTypes.MARKET,
    productId: '16452536', // $DDOG - Datadog
    size: 1,
    timeType: DeGiroTimeTypes.DAY,
    limitedPrice: 100,
    stopPrice: 99,
  }
  const executeId = await degiro.createOrder(order)
  console.log(JSON.stringify({ order, executeId }, null, 2))
})()
