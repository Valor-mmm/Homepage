import type { Metadata } from 'next';
import '../globals.css';
import { getTranslations } from 'next-intl/server';
import { Providers } from '@/app/[locale]/providers';
import Navbar from '@/components/navbar/navbar';
import { Footer } from '@/components/footer/footer';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className="text-foreground bg-background">
        <Providers locale={locale}>
          <Navbar />
          <main className="flex min-h-screen flex-col items-center justify-start p-24">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
