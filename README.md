# Unofficial DeGiro API

This is an unofficial Node.js API client for DeGiro's trading platform. Using this module you can easily automate your orders (buy and sell) and get information about orders, funds or products.

DeGiro is Europe's fastest growing online stockbroker. DeGiro distinguishes itself by offering institutional fees to retail investors.

⚠️  DeGiro could change their API at any moment, if something is not working, please open an issue.

## Install 

```sh
# using npm
npm install --save degiro-api

# using yarn
yarn add degiro-api
```

## Basic examples

### Create an instance of DeGiro

Basic log in DeGiro Platform. All endpoint needs a session key before those can be call.

```js
const DeGiro = require('degiro-api')

const degiro = new DeGiro({
  username: 'username',
  pwd: '*****'
})

degiro.login()
  .then(() => console.log('Log in success'))
  .catch(console.error)
```

### Get account details

Get account info using `await`:

```js
import DeGiro from 'degiro-api'

(async () => {
  const degiro = new DeGiro({
    username: 'username',
    pwd: '*****'
  })

  await degiro.login()

  const accountData = await degiro.getAccountData()
  // console.log(accountData)
})()
```

### Get portfolio

`getPortfolio`params are:
* **type**: set the types or positions you want to fetch. Could be:
  * ALL: Gets the response without filter it
  * ALL_POSITIONS: Gets only positions in products. Exclude positions like 'CASH', etc.
  * OPEN: Gets only opened positions. 
  * CLOSED: Gets only the closed positions in your portfolio.

* **getProductDetails**: if is set to true the positions results will have a `productData` field with all the product details.

Get all **open** positions:

```js
import DeGiro from 'degiro-api'
import { PORTFOLIO_POSITIONS_TYPE_ENUM } from 'degiro-api/enums'

(async () => {

  const degiro: DeGiro = new DeGiro({
    username: 'your_username_here',
    pwd: '**********',
  })

  await degiro.login()

  const portfolio = await degiro.getPortfolio({ 
    type: PORTFOLIO_POSITIONS_TYPE_ENUM.ALL, 
    getProductDetails: true,
  })
  console.log(JSON.stringify(portfolio, null, 2))
})()
```

Also you can fetch your portfolio data this way:

```js
import DeGiro from 'degiro-api'
import { PORTFOLIO_POSITIONS_TYPE_ENUM } from 'degiro-api/enums'

(async () => {

  const degiro: DeGiro = new DeGiro({
    username: 'your_username_here',
    pwd: '**********',
  })

  await degiro.login()

  const portfolio = await degiro.getPortfolio({ type: PORTFOLIO_POSITIONS_TYPE_ENUM.ALL })
  console.log(JSON.stringify(portfolio, null, 2))
})()
```

And getting product details too

```js
import DeGiro from 'degiro-api'
import { PORTFOLIO_POSITIONS_TYPE_ENUM } from 'degiro-api/enums'

(async () => {

  const degiro: DeGiro = new DeGiro({
    username: 'your_username_here',
    pwd: '**********',
  })

  await degiro.login()

  const portfolio = await degiro.getPortfolio({ 
    type: PORTFOLIO_POSITIONS_TYPE_ENUM.ALL, 
    getProductDetails: true,
  })
  console.log(JSON.stringify(portfolio, null, 2))
})()
```

## License

MIT

