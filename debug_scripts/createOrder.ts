import DeGiro from '../src/main'
import { DeGiroActions, DeGiroMarketOrderTypes, DeGiroTimeTypes } from '../src/enums/DeGiroEnums'
import { OrderType } from '../src/types'

(async () => {

  const degiro: DeGiro = new DeGiro({
    username: 'nachoogoomezomg',
    pwd: <string>process.env.DEGIRO_PWD,
  })

  await degiro.login()

  const order: OrderType = {
    buySell: DeGiroActions.BUY,
    orderType: DeGiroMarketOrderTypes.LIMITED,
    productId: '331868', // $AAPL - Apple Inc
    size: 1,
    timeType: DeGiroTimeTypes.DAY,
    price: 272, // limit price
    // stopPrice: 2,
  }

  const { confirmationId, freeSpaceNew, transactionFees } = await degiro.createOrder(order)
  console.log(JSON.stringify({ confirmationId, freeSpaceNew, transactionFees }, null, 2))
})()
