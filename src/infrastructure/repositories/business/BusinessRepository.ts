import { Business } from "@/domain/entities/business";
import { IBusinessRepository } from "@/domain/repositories/business/iBusinessRepository";
import { services } from "@/infrastructure/config/services";
import { axiosInstance } from "@/infrastructure/http/axiosInstance";

export class BusinessRepository implements IBusinessRepository{
  async getAllWithPermissions(): Promise<Business[]> {
    const response = await axiosInstance.get(`${services.admistrativeService}/business/allwithpermissions`);
    return response.data;
  }
}