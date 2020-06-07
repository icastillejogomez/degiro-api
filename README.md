# Unofficial DeGiro API

![DeGiro Logo](https://raw.githubusercontent.com/icastillejogomez/degiro-api/master/.assets/degiro.png)

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

### Search product, stock and much more in broker

`degiro.searchProduct(options): Promise<SearchProductResultType[]>`

* **options**: 
  * **text**: *required* string,
  * **type**: *optional* DeGiroProducTypes
  * **limit**: *optional* number default=10,
  * **offset**: *optional* number default=0,

`DeGiroProducTypes`

* *shares*: 1
* *bonds*: 2
* *futures*: 7
* *options*: 8
* *investmendFunds*: 13
* *leveragedProducts*: 14
* *etfs*: 131
* *cfds*: 535
* *warrants*: 536

Search the text "AAPL" without any limitation

```js
import DeGiro from './../main'

(async () => {

  const degiro: DeGiro = new DeGiro({
    username: 'your_username_here',
    pwd: '***********',
  })

  await degiro.login()

  const result = await degiro.searchProduct({ text: 'AAPL' })
  console.log(JSON.stringify(result, null, 2))
})()
```

Search TSLA stock

```js
import DeGiro from './../main'
import { DeGiroProducTypes } from 'degiro-api/enums'

(async () => {

  const degiro: DeGiro = new DeGiro({
    username: 'your_username_here',
    pwd: '***********',
  })

  await degiro.login()

  const result = await degiro.searchProduct({
    text: 'TSLA',
    type: DeGiroProducTypes.shares,
    limit: 1,
  })
  console.log(JSON.stringify(result, null, 2))
})()
```

## TO DO List

1. Two factor
2. Set orders
3. Get prices

## Degiro Command Line Interface (CLI)

See the repo [degiro-cli](https://github.com/icastillejogomez/degiro-cli).

## License

MIT

