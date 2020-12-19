import DeGiro from '../src/main'

(async () => {

  const degiro: DeGiro = new DeGiro({})
  await degiro.login()

  const accountConfig = await degiro.getAccountConfig()
  console.log(accountConfig)
})()
