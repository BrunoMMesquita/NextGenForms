'use client'

import { Business } from "@/domain/entities/business"
import { BusinessRepository } from "@/infrastructure/repositories/business/BusinessRepository"
import { createContext } from "react"
import { BusinessService } from "../services/business/businessService"
import { useQuery } from "@tanstack/react-query"
import { useAuth } from "../hooks/useAuth"

type BusinessContextType = {
  business: Business
}

const BusinessContext = createContext<BusinessContextType | null>(null)

export function BusinessProvider({ children }: { children: React.ReactNode }) {
  const { isAuthenticated }  = useAuth()
  async function getBusiness() {
    const businessService = new BusinessService(new BusinessRepository())
    const business = await businessService.getAllWithPermissions()
    return business
  }

  const {data} = useQuery({
    queryKey: ['business'],
    queryFn: getBusiness,
    enabled: isAuthenticated
  })

  console.log(data)

  return <BusinessContext value={{ business: {} as Business }}>{children}</BusinessContext>
}