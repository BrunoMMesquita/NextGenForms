import { AuthResponse } from "@/domain/entities/auth";
import { IAuthRepository } from "@/domain/repositories/auth/IAuthRepository";
import { getBase64Auth } from "@/utils";

export class AuthService {
  constructor(private readonly authRepository: IAuthRepository) { }

  async getAccessToken(code: string): Promise<AuthResponse> {
      const clientId = process.env.NEXT_PUBLIC_CLIENT_ID 
      if (!clientId) {
        throw new Error('Client ID not found');
      }
      const authBase64 = getBase64Auth({
        clientId,
        secretId: process.env.NEXT_PUBLIC_CLIENT_SECRET
      })
    return this.authRepository.getAccessToken({
      code,
      authBase64,
      clientId,
      grantType: 'authorization_code',
      redirectUri: ''
    });
  }
}