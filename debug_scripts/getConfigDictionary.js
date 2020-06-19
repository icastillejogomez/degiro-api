/**
 * Ignacio F. Castillejo Gómez 
 * 19 Jun 2020
 * 
 * Este archivo es un poco especial, la idea es obtener un objecto con listas e iterar cada elemento del objeto
 * principal para imprimir una tabla. Para hacer este trabajo en TypeScript se necesita de una función genérica
 * que nos permita extraer listas usando un indice string:
 * 
 * const oneList = configDictionary[myKeyIteration] // <-- Esto falla porque no se puede usar un string como indice
 * 
 * Para poder resolver esto rápido, este archivo ha sido desarrollado en JavaScript.
 * 
 * Si quieres cambiarlo a TypeScript y hacer un pull request será bienvenido :)
 */

const DeGiro = require('../dist/DeGiro').DeGiro


const degiro = new DeGiro({})
degiro.login()
  .then(() => degiro.getConfigDictionary())
  .then((configDictionary) => {
    const keys = Object.keys(configDictionary)
    for (const key in configDictionary) {
      const value = configDictionary[key]
      console.log(`\n\n${key}:\n`)
      console.table(value)
    }
  })
  .catch(console.error)

