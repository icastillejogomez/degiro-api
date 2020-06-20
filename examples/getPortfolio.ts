import DeGiro from '../src/main'
import { PORTFOLIO_POSITIONS_TYPE_ENUM } from '../src/enums/DeGiroEnums'

(async () => {

  const degiro: DeGiro = new DeGiro({
    username: 'nachoogoomezomg',
    pwd: <string>process.env.DEGIRO_PWD,
  })

  await degiro.login()

  const portfolio = await degiro.getPortfolio({ type: PORTFOLIO_POSITIONS_TYPE_ENUM.OPEN, getProductDetails: true })
  console.log(JSON.stringify(portfolio, null, 2))
})()
