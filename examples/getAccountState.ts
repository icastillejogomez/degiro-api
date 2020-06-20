import DeGiro from '../src/main'

(async () => {

  const degiro: DeGiro = new DeGiro({})
  await degiro.login()

  const accountStateList = await degiro.getAccountState({ from: '10/06/2020', to: '19/06/2020' })
  console.table(accountStateList)
})()
