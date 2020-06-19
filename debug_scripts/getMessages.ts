import DeGiro from '../src/main'

(async () => {

  const degiro: DeGiro = new DeGiro({})
  await degiro.login()

  const messages = await degiro.getWebi18nMessages('en_EN')
  console.log(messages)
})()
