import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const userInfo = request.cookies.get('userInfo')
  const isAuthPage = request.nextUrl.pathname.startsWith('/auth')
  const isLoginPage = request.nextUrl.pathname === '/login'

  if (!userInfo && !isAuthPage && !isLoginPage) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (userInfo && (isAuthPage || isLoginPage)) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*' ], // Aplicar apenas nas rotas especificadas
};