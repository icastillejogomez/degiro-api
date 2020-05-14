# Unofficial DeGiro API

This is an unofficial Node.js API client for DeGiro's trading platform. Using this module you can easily automate your orders (buy and sell) and get information about orders, funds or products.

DeGiro is Europe's fastest growing online stockbroker. DeGiro distinguishes itself by offering institutional fees to retail investors.

⚠️  DeGiro could change their API at any moment, if something is not working, please open an issue.

### Install 

```sh
# using npm
npm install --save degiro-api

# using yarn
yarn add degiro-api
```

### Basic examples

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

Get account info using `await`:

```js
import DeGiro from 'degiro-api'

const degiro = new DeGiro({
  username: 'username',
  pwd: '*****'
})

await degiro.login()

const accountData = await degiro.getAccountData()
// console.log(accountData)
```


### License

MIT

