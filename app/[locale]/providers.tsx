'use client';

import { NextUIProvider } from '@nextui-org/system';
import { PropsWithChildren } from 'react';
import { useRouter } from 'next/navigation';

type ProvidersProps = {
  locale: string;
};

export const Providers = ({
  children,
  locale,
}: PropsWithChildren<ProvidersProps>) => {
  const router = useRouter();

  return (
    <NextUIProvider locale={locale} navigate={router.push}>
      {children}
    </NextUIProvider>
  );
};
