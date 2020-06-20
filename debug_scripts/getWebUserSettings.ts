import DeGiro from '../src/main'

(async () => {

  const degiro: DeGiro = new DeGiro({})
  await degiro.login()

  const webUserSettings = await degiro.getWebUserSettings()
  console.log(webUserSettings)
})()
