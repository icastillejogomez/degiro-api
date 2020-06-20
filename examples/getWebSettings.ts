import DeGiro from '../src/main'

(async () => {

  const degiro: DeGiro = new DeGiro({})
  await degiro.login()

  const webSettings = await degiro.getWebSettings()
  console.log(webSettings)
})()
