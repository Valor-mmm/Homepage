import { useTranslations } from 'next-intl';
import { CV } from '@/features/cv/cv';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <>
      <h1 className="text-2xl">{t('title')}</h1>
      <CV />
    </>
  );
}
