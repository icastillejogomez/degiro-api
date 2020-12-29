// Import types
import { LoginRequestParamsType, LoginRequestBodyType, LoginResponseType } from '../types'

// Import enums
import { DEGIRO_API_PATHS } from '../enums'
const { BASE_API_URL, LOGIN_URL_PATH } = DEGIRO_API_PATHS

// Import debug console log
import { debug } from '../utils'

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

    const requestOptions: {
      method?: string,
      body?: string,
      headers: {
        [key: string]: string,
      },
      credentials: 'include',
      referer: string,
    } = {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      referer: 'https://trader.degiro.nl/trader/',
    }

    // Do the request to get a session
    debug(`Making request to ${BASE_API_URL}${LOGIN_URL_PATH} with options:`)
    debug(JSON.stringify(requestOptions, null, 2))
    fetch(`${BASE_API_URL}${LOGIN_URL_PATH}`, requestOptions)
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
