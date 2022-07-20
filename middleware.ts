// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextResponse, NextRequest } from 'next/server';
import { validateFilterOptions } from './lib';

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    if (!request.nextUrl.search) {
      return NextResponse.next();
    }

    const newQueryString = await validateFilterOptions(request);
    if (newQueryString === null) {
      return NextResponse.next();
    }
    const newURL = request.nextUrl.clone();
    newURL.search = newQueryString;

    return NextResponse.redirect(newURL);
  }

  return NextResponse.next();
}
