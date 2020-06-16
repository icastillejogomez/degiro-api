export type LoginRequestBodyType = {
  isPassCodeReset: boolean,
  isRedirectToMobile: boolean,
  password: string,
  username: string,
  queryParams: {
    reason: string,
  },
}