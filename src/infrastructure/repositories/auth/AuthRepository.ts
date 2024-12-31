import { AuthResponse, AuthRequest } from "@/domain/entities/auth";
import { IAuthRepository } from "@/domain/repositories/auth/IAuthRepository";
import { services } from "@/infrastructure/config/services";
import { axiosInstance } from "@/infrastructure/http/axiosInstance";

export class AuthRepository implements IAuthRepository {
  async getAccessToken(props: AuthRequest): Promise<AuthResponse> {
    const { authBase64, clientId, grantType, redirectUri, code } = props
    const headers = {
      Authorization: `Basic ${authBase64}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
    }
    const data = {
      code,
      grant_type: grantType,
      client_id: clientId,
      redirect_uri: redirectUri
    }

    const response = await axiosInstance.post(`${services.usmService}/oauth/accesstoken`, data, { headers });
    return response.data;
  }
}
