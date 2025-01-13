import { getCookie } from "./getCookie"

export async function getAuthCookie() {
  const accessToken = await getCookie('accessToken')
  const idpAccessToken = await getCookie('idpAccessToken')
  const refreshToken = await getCookie('refresh_token')
  const cryptoContextId = await getCookie('cryptoContextId')
  return {
    accessToken,
    idpAccessToken,
    refreshToken,
    cryptoContextId
  }
}