import { AuthService } from '@/application/services/auth/AuthService'
import { AuthRepository } from '@/infrastructure/repositories/auth/AuthRepository'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  if (!code) {
    return NextResponse.redirect(new URL('/auth/access', request.url))
  }

  try {
    const authService = new AuthService(new AuthRepository())
    const response = await authService.getAccessToken(code); 

    const destinationUrl = new URL("/processando", new URL(request.url).origin);
    const redirectResponse = NextResponse.redirect(destinationUrl)
    ;(await cookies()).set('accessToken', response.access_token, {
      maxAge: response.expires_in,
      sameSite: 'strict',
      secure: false,
    })
    ;(await cookies()).set('idpAccessToken', response.idp_access_token, {
      maxAge: response.expires_in,
      sameSite: 'strict',
      secure: false,
    })
    ;(await cookies()).set('refresh_token', response.refresh_token, {
      maxAge: response.expires_in,
      sameSite: 'strict',
      secure: false,
    })
    ;(await cookies()).set('cryptoContextId', response.crypto_context.id, {
      maxAge: response.expires_in,
      sameSite: 'strict',
      secure: false,
    })
    return redirectResponse
  } catch (error) {
    console.error('Authentication error:', error)
    return NextResponse.redirect(new URL('/auth/access', request.url))
  }
}

