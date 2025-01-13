import { BusinessTypeEnum } from "@/domain/enums/business"

export type Business = { 
  id: string
  tenantId?: string | null
  type: BusinessTypeEnum
  identification: string
  identificationBasic: string
  municipalInscription: string | null
  nationalSimpleOptInId: string | null
  specialTaxRuleId: string | null
  taxCalculationRuleId: string | null
  stateInscription: string | null
  realName: string
  fantasyName: string | null
  phoneNumber: string | null
  cellPhoneNumber: string
  contact: string | null
  website: string | null
  email: string
  foundationDate: string | null
  linkedin: string | null
  facebook: string | null
  twitter: string | null
  instagram: string | null
  active: boolean
  registrationIdentificationNumber: number | null
  legalNatureId: string | null
  // legalNatureReference?: LegalNature | null
  // businessSizeId: string | null
  // businessSizeReference?: BusinessSize | null
  // openFinanceConnections?: OpenFinanceConnection[]
  // inviteStatus?: OpenFinanceConnectionInviteStatusEnum
  logoFileType: string | null
  logoFileName: string | null
  logoFileString: string | null
  iconFileType: string | null
  iconFileName: string | null
  iconFileString: string | null
  isAccountedFor: boolean | false
  isRuralProducer: boolean | false
  identificationCard: string | null
  parentBusinessId: string | null
  crt: string | null
}