import DeGiro from './../main'
import { DeGiroActions, DeGiroMarketOrderTypes, DeGiroTimeTypes } from '../lib/enums/DeGiroEnums'
import { OrderType } from '../lib/types'

(async () => {

  try {
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
      price: 270, // limit price
      // stopPrice: 2,
    }

    const { confirmationId, freeSpaceNew, transactionFees } = await degiro.createOrder(order)
    const orderId = await degiro.executeOrder(order, confirmationId)
    console.log(`Order executed with id: ${orderId}`) 
  } catch (error) {
    console.error(error)
  }
})()
