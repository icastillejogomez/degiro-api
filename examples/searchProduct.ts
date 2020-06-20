import DeGiro from '../src/main'
import { DeGiroProducTypes } from '../src/enums/DeGiroEnums'

(async () => {

  const degiro: DeGiro = new DeGiro({
    username: 'nachoogoomezomg',
    pwd: <string>process.env.DEGIRO_PWD,
  })

  await degiro.login()

  const result = await degiro.searchProduct({
    text: 'AAPL',
    // type: DeGiroProducTypes.shares,
    limit: 1,
  })
  console.log(JSON.stringify(result, null, 2))
})()
