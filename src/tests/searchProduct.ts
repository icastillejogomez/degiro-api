import DeGiro from './../main'
import { DeGiroProducTypes } from '../lib/enums/DeGiroEnums'

(async () => {

  const degiro: DeGiro = new DeGiro({
    username: 'nachoogoomezomg',
    pwd: <string>process.env.DEGIRO_PWD,
  })

  await degiro.login()

  console.log('dasdaa')
  const result = await degiro.searchProduct({
    text: 'DDOG',
    // type: DeGiroProducTypes.shares,
    limit: 1,
  })
  console.log(JSON.stringify(result, null, 2))
})()
