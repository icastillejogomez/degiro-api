import DeGiro from '../src/main'

const degiro: DeGiro = new DeGiro({
  username: 'nachoogoomezomg',
  pwd: <string>process.env.DEGIRO_PWD,
})

degiro.login()
  .then(() => {
    console.log('Loggin success')
  })
  .catch((error) => {
    throw new Error(error)
  })
