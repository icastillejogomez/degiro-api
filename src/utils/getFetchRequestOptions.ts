import { DEGIRO_API_PATHS } from '../enums'
const { BASE_API_URL, REFERER_ENDPOINT } = DEGIRO_API_PATHS

export function getFetchRequestOptions(sessionId?: string, method?: string, body?: string, contentType?: string): any {
  const requestOptions: {
    method?: string,
    body?: string,
    headers: {
      [key: string]: string,
    },
    credentials: 'include',
    referer: string,
  } = {
    ...(method && { method }),
    headers: {
      ...(sessionId && { Cookie: `JSESSIONID=${sessionId};` }),
      ...(contentType && { 'Content-Type': contentType }),
    },
    ...(body && { body }),
    credentials: 'include',
    referer: BASE_API_URL + REFERER_ENDPOINT,
  }
  return requestOptions
}
