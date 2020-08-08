require('es6-promise').polyfill()
require('isomorphic-fetch')

import { DeGiro } from './DeGiro'
import * as DeGiroEnums from './enums/'
import * as DeGiroTypes from './types/'

export {
  DeGiroEnums,
  DeGiroTypes,
}
export default DeGiro