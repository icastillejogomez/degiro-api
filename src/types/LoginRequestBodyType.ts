export type LoginRequestBodyType = {
  isPassCodeReset: boolean,
  isRedirectToMobile: boolean,
  password: string,
  username: string,
  oneTimePassword: string | undefined,
  queryParams: {
    reason: string,
  },
}
