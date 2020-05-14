import DeGiro from './../main'

const degiro: DeGiro = new DeGiro({
  username: 'arganzana',
  pwd: <string>process.env.DEGIRO_PWD,
})

degiro.login()
  .then(() => {
    console.log('Loggin success')
  })
  .catch((error) => {
    throw new Error(error)
  })
