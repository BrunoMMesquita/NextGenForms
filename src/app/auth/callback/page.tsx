import { AuthService } from '@/application/services/auth/AuthService'
import { AuthRepository } from '@/infrastructure/repositories/auth/AuthRepository'
import { redirect } from 'next/navigation'
export default async function AuthCallback({
  searchParams,
}: {
  searchParams: { code: string }
}) {
  
  const { code } = searchParams

  if (!code) {
    redirect('/auth/access')
  }

  const authService = new AuthService(new AuthRepository())
  await authService.getAccessToken(code)
  // redirect('/dashboard')
}
