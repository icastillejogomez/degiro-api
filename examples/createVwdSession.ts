import DeGiro from '../src/main'

(async () => {

  const degiro: DeGiro = new DeGiro({})
  await degiro.login()

  const vwdSession = await degiro.createVwdSession()
  console.log(vwdSession)
})()
