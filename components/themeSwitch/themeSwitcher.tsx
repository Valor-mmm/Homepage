import { useTranslations } from 'next-intl';
import { ClientThemeSwitch } from '@/components/themeSwitch/clientThemeSwitch';

export const ThemeSwitcher = () => {
  const t = useTranslations('Components.ThemeSwitch');

  return (
    <ClientThemeSwitch
      selectDarkThemeText={t('selectDarkTheme')}
      selectLightThemeText={t('selectLightTheme')}
    />
  );
};
