import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const isLoggedIn = !!request.cookies.get('accessToken') 
  const isAuthPage = request.nextUrl.pathname.startsWith('/auth')

  if (!isLoggedIn && !isAuthPage) {
    return NextResponse.redirect(new URL('/auth/access', request.url))
  }

  if (isLoggedIn && (isAuthPage)) {
    return NextResponse.redirect(new URL('/produtos/lista', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/produtos/:path*', '/auth/:path*'], // Aplicar apenas nas rotas especificadas
};