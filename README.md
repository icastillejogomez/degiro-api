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
import DeGiro from 'degiro-api'

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
import DeGiro from 'degiro-api'
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

### DeGiro Orders

## Create a new order

`degiro.createOrder(order: OrderType): Promise<CreateOrderResultType>`

* **OrderType**
  * **buySell**: DeGiroActions,
  * **orderType**: DeGiroMarketOrderTypes,
  * **price**: *optional* Number,
  * **productId**: string,
  * **size**: number,
  * **stopPrice**: *optional* number,
  * **timeType**: DeGiroTimeTypes,


* **DeGiroActions**
  * **BUY**: 'BUY',
  * **SELL**: 'SELL',


* **DeGiroMarketOrderTypes**
  * **LIMITED**: 0,
  * **MARKET**: 2,
  * **STOP_LOSS**: 3,
  * **STOP_LOSS_LIMIT**: 1,

* **DeGiroTimeTypes**
  * **DAY**: 1,
  * **PERMANENT**: 3,

* **CreateOrderResultType**
  * **confirmationId**: String,
  * **freeSpaceNew**: Number,
  * **transactionFees**: [TransactionFeeType],


* **TransactionFeeType**
  * **amount**: Number,
  * **currency**: String,
  * **id**: Number,


```js
import DeGiro from 'degiro-api'
import { DeGiroActions, DeGiroMarketOrderTypes, DeGiroTimeTypes } from 'degiro-api/enums'
import { OrderType } from 'degiro-api/types' // should not work?? 

(async () => {

  const degiro: DeGiro = new DeGiro({
    username: 'your_username_here',
    pwd: '************'
  })

  await degiro.login()

  const order: OrderType = {
    buySell: DeGiroActions.BUY,
    orderType: DeGiroMarketOrderTypes.LIMITED,
    productId: '331868', // $AAPL - Apple Inc
    size: 1,
    timeType: DeGiroTimeTypes.DAY,
    price: 272, // limit price [Degiro could reject this value]
    // stopPrice: 2,
  }

  const { confirmationId, freeSpaceNew, transactionFees } = await degiro.createOrder(order)
  console.log(JSON.stringify({ confirmationId, freeSpaceNew, transactionFees }, null, 2))
})()
```



## TO DO List

1. Two factor
2. Get prices

## Degiro Command Line Interface (CLI)

See the repo [degiro-cli](https://github.com/icastillejogomez/degiro-cli).

## License

MIT

