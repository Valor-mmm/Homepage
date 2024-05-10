import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');

  return <h1 className="text-2xl">{t('title')}</h1>;
}
