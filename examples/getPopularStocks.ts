import DeGiro from '../src/main'

(async () => {

  const degiro: DeGiro = new DeGiro({})
  await degiro.login()

  const stocks = await degiro.getPopularStocks()
  console.log(JSON.stringify(stocks, null, 2))

  await degiro.logout()
})()
