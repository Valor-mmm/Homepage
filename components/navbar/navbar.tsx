import { useTranslations } from 'next-intl';
import ClientNavbar, {
  type NavbarLinkType,
} from '@/components/navbar/clientNavbar';
import { ThemeSwitcher } from '@/components/themeSwitch/themeSwitcher';

const anchorLinks = ['cv', 'skills', 'contact'];

export default function Navbar() {
  const t = useTranslations('Header.Navbar');
  const anchorLinkDetails: NavbarLinkType[] = anchorLinks.map((link) => ({
    href: `#${link}`,
    text: t(link),
  }));

  return (
    <ClientNavbar
      menuOpenText={t('openMenu')}
      menuCloseText={t('closeMenu')}
      anchorLinks={[{ text: t('home'), href: '' }, ...anchorLinkDetails]}
      ThemeSwitcher={<ThemeSwitcher />}
    />
  );
}
