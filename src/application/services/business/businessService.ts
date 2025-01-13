import { IBusinessRepository } from "@/domain/repositories/business/iBusinessRepository";

export class BusinessService {
  constructor(private readonly authRepository: IBusinessRepository) { }
  async getAllWithPermissions() {
    return this.authRepository.getAllWithPermissions();
  }
}