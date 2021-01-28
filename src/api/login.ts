// Import types
import { LoginRequestParamsType, LoginRequestBodyType, LoginResponseType } from '../types'

// Import enums
import { DEGIRO_API_PATHS } from '../enums'
const { BASE_API_URL, LOGIN_URL_PATH } = DEGIRO_API_PATHS

// Import debug console log
import { debug, getFetchRequestOptions } from '../utils'

export function loginRequest(params: LoginRequestParamsType): Promise<LoginResponseType> {
  return new Promise((resolve, reject) => {

    // Make the payload
    const payload: LoginRequestBodyType = {
      isPassCodeReset: false,
      isRedirectToMobile: false,
      password: params.pwd,
      username: params.username.toLowerCase().trim(),
      oneTimePassword: params.oneTimePassword,
      queryParams: {
        reason: 'session_expired',
      },
    }

    const requestOptions = getFetchRequestOptions(undefined, 'POST', JSON.stringify(payload), 'application/json')

    // Do the request to get a session
    const uri = `${BASE_API_URL}${LOGIN_URL_PATH}`
    debug(`Making request to ${uri} with options:`)
    debug(JSON.stringify(requestOptions, null, 2))
    fetch(uri, requestOptions)
      .then((res) => {
        if (!payload.oneTimePassword) return res
        debug('Sending OTP')
        return fetch(`${BASE_API_URL}${LOGIN_URL_PATH}/totp`, requestOptions);
      })
      .then(res => res.json())
      .then((res) => {
        if (!res.sessionId) return reject(res.statusText)
        debug('Login response: ', JSON.stringify(res, null, 2))
        resolve(res)
      })
      .catch(reject);
  })
}
