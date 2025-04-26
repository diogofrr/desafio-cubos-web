import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const COOKIE_NAME = 'jwt';

export function middleware(request: NextRequest) {
  const cookieStore = request.cookies;
  const jwtCookie = cookieStore.get(COOKIE_NAME)?.value;

  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/public') ||
    pathname.includes('.') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/android-chrome') ||
    pathname.startsWith('/apple-touch-icon') ||
    pathname.startsWith('/site.webmanifest')
  ) {
    return NextResponse.next();
  }

  if (pathname === '/login' && jwtCookie || pathname === '/register' && jwtCookie) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (pathname === '/') {
    if (!jwtCookie) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/login',
    '/register',
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
};
