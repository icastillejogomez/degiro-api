import DeGiro from '../src/main'

(async () => {

  const degiro: DeGiro = new DeGiro({})
  await degiro.login()

  const news = await degiro.getNews({
    languages: 'es',
    top: false,
    latest: true,
    latestOffset: 0,
    latestLimit: 1,
  })
  console.log(JSON.stringify(news, null, 2))

  await degiro.logout()
})()
