import { AuthRequest, AuthResponse} from "../../entities/auth";

export interface IAuthRepository {
  getAccessToken(props: AuthRequest): Promise<AuthResponse>;
}