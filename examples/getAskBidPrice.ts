import DeGiro from '../src/main'

(async () => {

  const degiro: DeGiro = new DeGiro({})
  await degiro.login()

  const vwdSession = await degiro.createVwdSession()
  console.log(vwdSession)

  const productId = '350009261'
  const bidAsk = await degiro.getAskBidPrice(productId)
  console.log(JSON.stringify(bidAsk, null, 2))
})()
