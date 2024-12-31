import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const bypassAuth = request.headers.get('X-Bypass-Auth') === 'true'
  if (bypassAuth) {
    
  }
  const isLoggedIn = !!request.cookies.get('accessToken') 
  const isAuthPage = request.nextUrl.pathname.startsWith('/auth')

  if (!isLoggedIn && !isAuthPage) {
    return NextResponse.redirect(new URL('/auth/access', request.url))
  }

  if (isLoggedIn && (isAuthPage)) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/auth/:path*'], // Aplicar apenas nas rotas especificadas
};