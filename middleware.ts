import createMiddleware from 'next-intl/middleware';
import { locales } from '@/globalConstants';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: locales[0],
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en)/:path*'], // cannot be defined using the locales constant as the input cannot contain variables
};
