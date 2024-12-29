import { AuthRequest } from "@/domain/entities/auth/AuthRequest";
import { IAuthRepository } from "@/domain/repositories/IAuthRepository";
import { services } from "@/infrastructure/config/services";
import { axiosInstance } from "@/infrastructure/http/axiosInstance";

export class AuthRepository implements IAuthRepository {
  async getAccessToken(props: AuthRequest): Promise<string> {
    const { authBase64, clientId, grantType, redirectUri, code } = props
    const headers = {
      Authorization: `Basic ${authBase64}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
    }
    const data = new URLSearchParams({
      code,
      grant_type: grantType,
      client_id: clientId,
      redirect_uri: redirectUri
    })
    const response = await axiosInstance.post<string, string>(`${services.usmService}/accesstokens`, data, { headers });
    return response;
  }
}