import { Business } from "@/domain/entities/business";

export interface IBusinessRepository {
  getAllWithPermissions(): Promise<Business[]>;
}