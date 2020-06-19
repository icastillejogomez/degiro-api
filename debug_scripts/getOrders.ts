import DeGiro from '../src/main'

(async () => {

  const degiro: DeGiro = new DeGiro({})
  await degiro.login()

  const { orders, lastTransactions } = await degiro.getOrders({ active: true, lastTransactions: true })
  console.log(`Fetched ${orders.length} orders and ${lastTransactions.length} last transactions\n`)
  console.log('Orders:')
  console.table(orders)
  console.log('\n\nLatest transactions:')
  console.table(lastTransactions)
})()
