import DeGiro from '../src/main'

(async () => {

  const degiro: DeGiro = new DeGiro({})
  await degiro.login()

  const cashFunds = await degiro.getCashFunds()
  console.log(JSON.stringify(cashFunds, null, 2))

  await degiro.logout()
})()
