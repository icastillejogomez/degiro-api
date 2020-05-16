import DeGiro from './../main'
import { DeGiroProducTypes } from '../lib/enums/DeGiroEnums'

(async () => {

  const degiro: DeGiro = new DeGiro({
    username: 'nachoogoomezomg',
    pwd: <string>process.env.DEGIRO_PWD,
  })

  await degiro.login()

  const result = await degiro.searchProduct({
    text: 'TSLA',
    type: DeGiroProducTypes.shares,
    limit: 1,
  })
  console.log(JSON.stringify(result, null, 2))
})()
