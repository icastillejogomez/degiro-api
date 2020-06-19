import DeGiro from '../src/main'

(async () => {

  const degiro: DeGiro = new DeGiro({})
  await degiro.login()

  const accountInfo = await degiro.getAccountInfo()
  console.log(accountInfo)
})()
