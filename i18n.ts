import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales } from '@/globalConstants';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  return {
    formats: {
      dateTime: {
        monthYear: {
          month: 'long',
          year: 'numeric',
        },
      },
    },
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
