import DeGiro from './../main'

(async () => {

  const degiro: DeGiro = new DeGiro({
    username: 'nachoogoomezomg',
    pwd: <string>process.env.DEGIRO_PWD,
  })

  await degiro.login()

  const result = await degiro.searchProduct({ text: 'DDOG' })
  console.log(JSON.stringify(result, null, 2))
})()
