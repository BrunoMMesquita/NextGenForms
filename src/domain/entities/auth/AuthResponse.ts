export type AuthResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  idp_access_token: string;
  crypto_context: {
    id: string;
  }
  scope: string;
}