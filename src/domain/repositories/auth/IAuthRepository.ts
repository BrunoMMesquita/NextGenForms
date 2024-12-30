import { AuthRequest } from "../../entities/auth/AuthRequest";

export interface IAuthRepository {
  getAccessToken(props: AuthRequest): Promise<string>;
}