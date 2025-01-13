export type AuthRequest = {
  code: string
  grantType: string
  clientId: string
  authBase64: string
  redirectUri: string
}
