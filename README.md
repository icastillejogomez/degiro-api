# DeGiro Trading Broker API

This is an unofficial TypeScript API client (Backend & Frontend) for DeGiro's trading platform. Using this module you can easily automate your orders (buy and sell) and get information about orders, funds or products.

All responses and objects are typed to develop faster and secure.

![DeGiro Logo](https://raw.githubusercontent.com/icastillejogomez/degiro-api/master/.assets/degiro.png)

![stars](https://badgen.net/github/stars/icastillejogomez/degiro-api)
![stars](https://badgen.net/github/open-issues/icastillejogomez/degiro-api)
![stars](https://badgen.net/github/license/icastillejogomez/degiro-api)

<br />

<a href="https://www.buymeacoffee.com/nachoogoomez" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

<br />

Don't use in production build, this project is under development. In the next few weeks we're going to have the first stable release version.

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
const DeGiro = require('degiro-api')

const degiro = new DeGiro({
  username: 'username',
  pwd: '*****'
})

degiro.login()
  .then((accountData) => console.log('Log in success\n', accountData))
  .catch(console.error)

// or creating with the static create method

const degiro = DeGiro.create({ username: '*****', pwd: '*****' })
const accountData = await degiro.login()

// or create with env credentials

const degiro = new DeGiro() // <-- Use DEGIRO_USER & DEGIRO_PWD
const accountData = await degiro.login()
```

### Active Debug mode

```js
$ export DEGIRO_DEBUG=1
$ yarn start
```

### Documentation

Run the next command and open index.html file inside doc folder.

```sh
$ yarn doc
yarn run v1.22.4
$ typedoc --out docs src

Using TypeScript 3.9.2 from ....../degiro-api/node_modules/typescript/lib
Rendering [========================================] 100%

Documentation generated at ....../degiro-api/docs

✨  Done in 3.94s.
```

### Running tests set

Before run the test set you must set DEGIRO_USER & DEGIRO_PWD env export variables to attach an account to the test sets.

```js
$ yarn install && yarn test
yarn run v1.22.4
$ mocha -r ts-node/register tests/**/*.spec.ts


  Environment variables
    ✓ DEGIRO_USER env var should exists
    ✓ DEGIRO_PWD env var should exists

  Create DeGiro instance
    ✓ should create an instance of DeGiro class from env vars
    ✓ should create an instance of DeGiro class from constructor params

  DeGiro login process
    ✓ should successfully log in with environment credentials (619ms)
    ✓ should return a valid account config from server (738ms)
    ✓ should return a valid account data from server (727ms)
    ✓ getJSESSIONID should return a valid jsessionId
    ✓ should login with previous jsessionId

  DeGiro logout process
    ✓ should successfully log out after sign in (685ms)


  10 passing (3s)

✨  Done in 5.21s.
```

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
    username: '<your_username_here>',
    pwd: '*******',
    jsessionId: previousJSESSIONID
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

#### getAccountData

`getAccountData(): Promise<AccountDataType>`


#### getAccountState

`getAccountState(options: GetAccountStateOptionsType): Promise<any[]>`


#### getAccountReports

`getAccountReports(): Promise<AccountReportsType>`


#### getAccountInfo

`getAccountInfo(): Promise<AccountInfoType>`

### Search products endpoints

#### searchProduct

`searchProduct(options: SearchProductOptionsType): Promise<SearchProductResultType[]>`

### Cash Funds endpoints

#### getCashFunds

`getCashFunds(): Promise<CashFoundType[]>`

### Porfolio endpoints
### Stocks endpoints

#### getFavouriteProducts()
#### getPopularStocks()

### Orders endpoints

### getOrders()
### getHistoricalOrders()
### createOrder()
### executeOrder()
### deleteOrder()

### Miscellaneous endpoints

#### getProductsByIds()
#### getNews()
#### getWebi18nMessages()
#### getWebSettings()
#### getWebUserSettings()
#### getConfigDictionary()

## All project Types

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

