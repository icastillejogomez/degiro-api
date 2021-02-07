# DeGiro Trading Broker API

This is an unofficial TypeScript API client (Backend only) for DeGiro's trading platform. Using this module you can easily automate your orders (buy and sell) and get information about orders, funds or products. From now on we have one time password (OTP) support.

All responses and objects are typed to develop faster and secure.

Unfortunately this library can not be used as frontend library, as DeGiro does not allow external requests through their CORS policy.

![DeGiro Logo](https://raw.githubusercontent.com/icastillejogomez/degiro-api/master/.assets/degiro.png)

![stars](https://badgen.net/github/stars/icastillejogomez/degiro-api)
![stars](https://badgen.net/github/open-issues/icastillejogomez/degiro-api)
![stars](https://badgen.net/github/license/icastillejogomez/degiro-api)

<br />

<a href="https://www.buymeacoffee.com/nachoogoomez" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

<br />

Be careful, DeGiro could block your account if they catch you using automation scripts

## Table of content

<!--ts-->
  * [DeGiro Trading Broker API](#degiro-trading-broker-api)
  * [Table of content](#table-of-content)
  * [Installation](#installation)
  * [How to use](#how-to-use)
    * [Create an instance of DeGiro](#create-an-instance-of-degiro)
    * [Active Debug mode](#local-files)
    * [Documentation](#documentation)
    * [Running tests set](#running-tests-set)
    * [Get JSESSIONID and reuse sessions](#get-jsessionid-and-reuse-sessions)
    * [Check if we are authenticated](#check-if-we-are-authenticated)
  * [API](#api)
    * [Session endpoints](#session-endpoints)
      * [login](#login)
      * [logout](#logout)
      * [isLogin](#isLogin)
      * [getJSESSIONID](#getJSESSIONID)
    * [Account endpoints](#account-endpoints)
      * [getAccountConfig](#getAccountConfig)
      * [getAccountData](#getAccountData)
      * [getAccountState](#getAccountState)
      * [getAccountReports](#getAccountReports)
      * [getAccountInfo](#getAccountInfo)
    * [Search products endpoints](#foo)
      * [searchProduct](#searchProduct)
    * [Cash Funds endpoints](#cash-funds-endpoints)
      * [getCashFunds](#getCashFunds)
    * [Porfolio endpoints](#foo)
    * [Stocks endpoints](#foo)
      * [getFavouriteProducts](#foo)
      * [getPopularStocks](#foo)
    * [Orders endpoints](#foo)
      * [getOrders](#foo)
      * [getHistoricalOrders](#foo)
      * [createOrder](#foo)
      * [executeOrder](#foo)
      * [deleteOrder](#foo)
    * [Miscellaneous endpoints](#foo)
      * [getProductsByIds](#foo)
      * [getNews](#foo)
      * [getWebi18nMessages](#foo)
      * [getWebSettings](#foo)
      * [getWebUserSettings](#foo)
      * [getConfigDictionary](#foo)
  * [All project Types](#all-project-types)
    * [SomeType](#sometype)
  * [Need help endpoints](#need-help-endpoints)
  * [Degiro Command Line Interface](#degiro-command-line-interface)
  * [License](#dependency)
  * [TO DO List](#to-do-list)
<!--te-->

## Installation 

```sh
# using npm
npm install --save degiro-api

# using yarn
yarn add degiro-api
```

## How to use

### Create an instance of DeGiro

Basic log into DeGiro Platform. All endpoint needs a session key before those can be call them. You can pass credentials to DeGiro constructor or export in your terminal prompt sesion as `DEGIRO_USER` and `DEGIRO_PWD`

```js
const DeGiro = require('degiro-api').default
// or
import DeGiro from 'degiro-api'

// Basic degiro init
const degiro = new DeGiro({
  username: '<your_username_here>',
  pwd: '*****'
})

// or creating with the static create method
const degiro = DeGiro.create({ username: '*****', pwd: '*****' })

// or create with env credentials
const degiro = new DeGiro() // <-- Use DEGIRO_USER & DEGIRO_PWD
```

### Active Debug mode

Inside all module are call to one debug function that listen the `DEGIRO_DEBUG` env variable. Setting it with any truthy value you can enable all logs to debug the code. 

```js
$ export DEGIRO_DEBUG=1
$ yarn start
```

### Documentation

Run the next command and open index.html file inside doc folder to see a fresh documentation of the module.

Generate the documentation is easy, only run the next command:

```sh
$ yarn doc
or
$ npm run doc
```

### Running tests set

Before run the test set you must set DEGIRO_USER & DEGIRO_PWD env export variables to attach an account to the test sets.

Be careful, the test set are going to make many request to degiro and are going to generate many session. DeGiro can track this events and ban your account (I don't know, read all contract before sign up 🤷‍♂️)

Now, I'm developing a feature that can bring you the ability of reuse only one session across all the entire test set. (The login and logout tests always are going to create differents sessions)

To run this experimental feature set the `DEGIRO_TESTS_REUSE_SESSION` env variable to any truthy value.

Keep in mind: the tests can fail, if the deleteOrder test crash, you could have one new order in your account that you didn't create yourself. In those cases, the test process print this information in console. Read always all tests results. 

To run all tests set run the command: `yarn test` or `npm run test`

### Get JSESSIONID and reuse sessions

The JSessionId is the session browser cookie that DeGiro use to authenticate requests. You could prevent masive login/logout requests reusing a valid jsessionid from previous DeGiro instance. The way to do that is:

```js
import DeGiro from 'degiro-api'

(async () => {
  const degiro = new DeGiro({}) // <-- Using ENV variables

  await degiro.login()

  // Get the jsessionId (LOOK, is not a promise)
  const jsessionId = degiro.getJSESSIONID()
})()
```

```js
import DeGiro from 'degiro-api'

(async () => {

  // Create an instance from a previous session
  const degiro = new DeGiro({
    username: '<your_username_here>', // process.env['DEGIRO_USER]
    pwd: '<your_password_here>', // process.env['DEGIRO_PWD]
    oneTimePassword: '<your_one_time_password_here>', // process.env['DEGIRO_OTP]
    jsessionId: '<your_jsessionId_here>', // process.env['DEGIRO_JSESSIONID]
  })

  // Hydrate
  // Re-use sessions need to re-hydrate the account config data and could use as a session expiration checker
  await degiro.login()

  // Do your stuff here...

})()
```

### Check if we are authenticated

```js
import DeGiro from 'degiro-api'

(async () => {
  // Create an instance from a previous session
  const degiro = new DeGiro({}) // <-- Using ENV variables

  if (!degiro.isLogin()) {
    await degiro.login()
    if (degiro.isLogin()) {
      // AWESOME!! We're in
    }
  }
})()
```

The problem with this method is that it only checks if you have the account configuration data set. The only way to verify that the session is still active is make a request.
You can force isLogin method passing it a `secure` field set to true. This way the method will return a promise and below it will call a DeGiro API endpoint (usually getAccountConfig)

```js
import DeGiro from 'degiro-api'

(async () => {
  // Create an instance from a previous session
  const degiro = new DeGiro({}) // <-- Using ENV variables

  // Force to make a request and check if session is still alive
  if(! await degiro.isLogin({ secure: true })) {
    await degiro.login()
  }
})()
```

## API

### Session endpoints

#### login

`login(): Promise<AccountDataType>`

```js
import DeGiro from 'degiro-api'

const degiro = new DeGiro({})
const accountData = await degiro.login()
```

#### logout

`logout(): Promise<void>`

```js
import DeGiro from 'degiro-api'

const degiro = new DeGiro({})
const accountData = await degiro.login()
await degiro.logout()
```

#### isLogin

`isLogin() (options?: IsLoginOptionsType): boolean | Promise<boolean>`

```js
import DeGiro from 'degiro-api'

const degiro = new DeGiro({})
await degiro.login()

const isLogin = degiro.isLogin()

if (! await degiro.isLogin({ secure: true })) {
  // Do your magic
}
```

#### getJSESSIONID

`getJSESSIONID(): string | undefined`

```js
import DeGiro from 'degiro-api'

const degiro = new DeGiro({})
degiro.getJSESSIONID() // undefined
await degiro.login()
degiro.getJSESSIONID() // string
```

### Account endpoints

#### getAccountConfig

`getAccountConfig(sessionId: string): Promise<AccountConfigType>`

```js
import DeGiro from 'degiro-api'

const degiro = new DeGiro({})
await degiro.login()

const accountConfig = await degiro.getAccountConfig()
console.log(accountConfig)
```

#### getAccountData

`getAccountData(): Promise<AccountDataType>`

```js
import DeGiro from 'degiro-api'

const degiro = new DeGiro({})
await degiro.login() // Login also returns accountData

const accountData = await degiro.getAccountData()
console.log(accountData)
```

#### getAccountState

`getAccountState(options: GetAccountStateOptionsType): Promise<any[]>`

```js
import DeGiro from 'degiro-api'

const degiro = new DeGiro({})
await degiro.login()

const accountState = await degiro.getAccountState()
console.log(accountState)
```

#### getAccountReports

`getAccountReports(): Promise<AccountReportsType>`

```js
import DeGiro from 'degiro-api'

const degiro = new DeGiro({})
await degiro.login()

const reports = await degiro.getAccountReports()
console.log(reports)
```

#### getAccountInfo

`getAccountInfo(): Promise<AccountInfoType>`

```js
import DeGiro from 'degiro-api'

const degiro = new DeGiro({})
await degiro.login()

const accountInfo = await degiro.getAccountInfo()
console.log(accountInfo)
```

### Search products endpoints

#### searchProduct

`searchProduct(options: SearchProductOptionsType): Promise<SearchProductResultType[]>`

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
import DeGiro, { DeGiroEnums, DeGiroTypes } from 'degiro-api'
const { DeGiroProducTypes } = DeGiroEnums

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

### Cash Funds endpoints

#### getCashFunds

`getCashFunds(): Promise<CashFoundType[]>`

### Porfolio endpoints

#### getPortfolio

`getPortfolio(config: GetPorfolioConfigType): Promise<any[]>`

`getPortfolio` config parameter could have:
* **type**: set the types or positions you want to fetch. Could be:
  * ALL: Gets the response without filter it
  * ALL_POSITIONS: Gets only positions in products. Exclude positions like 'CASH', etc.
  * OPEN: Gets only opened positions. 
  * CLOSED: Gets only the closed positions in your portfolio.

* **getProductDetails**: if is set to true the positions results will have a `productData` field with all the product details.

Get all **open** positions:

```js
import DeGiro, { DeGiroEnums, DeGiroTypes } from 'degiro-api'
const { PORTFOLIO_POSITIONS_TYPE_ENUM } = DeGiroEnums

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
import DeGiro, { DeGiroEnums, DeGiroTypes } from 'degiro-api'
const { PORTFOLIO_POSITIONS_TYPE_ENUM } = DeGiroEnums

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
import DeGiro, { DeGiroEnums, DeGiroTypes } from 'degiro-api'
const { PORTFOLIO_POSITIONS_TYPE_ENUM } = DeGiroEnums

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

### Stocks endpoints

#### getFavouriteProducts()

`getFavouriteProducts(): Promise<FavouriteProductType[]>`

#### getPopularStocks()

`getPopularStocks(): Promise<StockType[]>`

### Orders endpoints

### getOrders()

`getOrders(options: GetOrdersConfigType): Promise<GetOrdersResultType>`

### getHistoricalOrders()

`getHistoricalOrders(options: GetHistoricalOrdersOptionsType): Promise<HistoricalOrdersType>`

### createOrder()

`createOrder(order: OrderType): Promise<CreateOrderResultType>`

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
import DeGiro, { DeGiroEnums, DeGiroTypes } from 'degiro-api'
const { DeGiroActions, DeGiroMarketOrderTypes, DeGiroTimeTypes } = DeGiroEnums
const { OrderType } = DeGiroTypes

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

### executeOrder()

`executeOrder(order: OrderType, executeId: string): Promise<String>`

```js
import DeGiro, { DeGiroEnums, DeGiroTypes } from 'degiro-api'
const { DeGiroActions, DeGiroMarketOrderTypes, DeGiroTimeTypes } = DeGiroEnums
const { OrderType } = DeGiroTypes

(async () => {

  try {
    const degiro: DeGiro = new DeGiro({
      username: '<your_username_here>',
      pwd: <string>process.env.DEGIRO_PWD,
    })

    await degiro.login()

    const order: OrderType = {
      buySell: DeGiroActions.BUY,
      orderType: DeGiroMarketOrderTypes.LIMITED,
      productId: '331868', // $AAPL - Apple Inc
      size: 1,
      timeType: DeGiroTimeTypes.DAY,
      price: 270, // limit price
      // stopPrice: 2,
    }

    const { confirmationId, freeSpaceNew, transactionFees } = await degiro.createOrder(order)
    const orderId = await degiro.executeOrder(order, confirmationId)
    console.log(`Order executed with id: ${orderId}`)
  } catch (error) {
    console.error(error)
  }
})()
```

### deleteOrder()

`deleteOrder(orderId: String): Promise<void>`

```js
import DeGiro, { DeGiroEnums, DeGiroTypes } from 'degiro-api'
const { DeGiroActions, DeGiroMarketOrderTypes, DeGiroTimeTypes } = DeGiroEnums
const { OrderType } = DeGiroTypes

(async () => {

  const degiro: DeGiro = new DeGiro({
    username: '<your_username_here>',
    pwd: <string>process.env.DEGIRO_PWD,
  })

  await degiro.login()

  const order: OrderType = {
    buySell: DeGiroActions.BUY,
    orderType: DeGiroMarketOrderTypes.LIMITED,
    productId: '331868', // $AAPL - Apple Inc
    size: 1,
    timeType: DeGiroTimeTypes.DAY,
    price: 272, // limit price
    // stopPrice: 2,
  }

  const { confirmationId, freeSpaceNew, transactionFees } = await degiro.createOrder(order)
  const orderId = await degiro.executeOrder(order, confirmationId)
  console.log(`Order executed with id: ${orderId}`)

  // Wait few seconds to avoid "Rate limit for the given request exceeded" error
  const TIMEOUT_SECONDS = 2 * 1000
  const deleteOrderFunction = async () => {
    try {
      await degiro.deleteOrder(orderId)
      console.log('Order removed')
    } catch (error) {
      console.error(error)
    }
  }
  setTimeout(deleteOrderFunction, TIMEOUT_SECONDS)
})()
```

### Miscellaneous endpoints

#### getProductsByIds()

`getProductsByIds(ids: string[]): Promise<any[]>`

#### getNews()

`getNews(options: GetNewsOptionsType): Promise<NewsType>`

#### getWebi18nMessages()

`getWebi18nMessages(lang: string): Promise<i18nMessagesType>`

#### getWebSettings()

`getWebSettings(): Promise<WebSettingsType>`

#### getWebUserSettings()

`getWebUserSettings(): Promise<WebUserSettingType>`

#### getConfigDictionary()

`getConfigDictionary(): Promise<ConfigDictionaryType>`


## All project Types

If you code with typescript and use [IntelliSense](https://code.visualstudio.com/docs/editor/intellisense) you are going to get access to all objects properties and all stuff...

If you not, in the docs section could find all methods, functions, types, whatever you want. Don't waste more time and click here to see the [documentation](https://icastillejogomez.github.io/degiro-api/).

### SomeType

## Need help endpoints

We need help with the next endpoint:...

## Degiro Command Line Interface

[degiro-cli](https://github.com/icastillejogomez/degiro-cli) is an usefull command line interface that help us dealing with DeGiro platform through the terminal. You can see your portfolio status, create and execute orders and much more (may in the future)

```sh
$ degiro
Usage: DeGiro Command Line Interface [options] [command]

DeGiro CLI provide you access to DeGiro Broker across the terminal

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  login           validate credentials with DeGiro platform
  search          Search products in DeGiro
  portfolio       show account portfolio in real-time
  help [command]  display help for command
```
## License

MIT


## TO DO List

1. Two factor
2. Get prices

