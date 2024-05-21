'use client';

import { useMemo, useState } from 'react';
import {
  Navbar as NextUiNavbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar';
import { Link, LinkProps } from '@nextui-org/link';
import { useUrlHash } from '@/utils/hooks/useUrlHash';

export interface NavbarLinkType {
  href: string;
  text: string;
}

interface NavbarItemType {
  href: Required<LinkProps['href']>;
  linkText: string;
  isActive?: boolean;
}

interface ClientNavbarProps {
  menuOpenText: string;
  menuCloseText: string;
  anchorLinks: NavbarLinkType[];
}

export default function ClientNavbar({
  menuOpenText,
  menuCloseText,
  anchorLinks,
}: ClientNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const urlHash = useUrlHash();

  const navLinks: NavbarItemType[] = useMemo(
    () =>
      anchorLinks.map(({ href, text }) => {
        const isActive = urlHash === href;
        return { href, linkText: text, isActive };
      }),
    [anchorLinks, urlHash],
  );

  return (
    <NextUiNavbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred
      isBordered
      className="sm:p-4"
    >
      <NavbarContent className="sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? menuCloseText : menuOpenText}
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="start">
        {navLinks.map(({ href, isActive, linkText }, index) => (
          <NavbarItem key={`${href}-${index}`} isActive={isActive}>
            <Link
              href={href}
              color={isActive ? 'primary' : 'foreground'}
              aria-current={'page'}
              className="text-3xl"
            >
              {linkText}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu>
        {navLinks.map(({ href, isActive, linkText }, index) => (
          <NavbarMenuItem key={`${href}-${index}`} isActive={isActive}>
            {' '}
            <Link
              href={href}
              color={isActive ? 'primary' : 'foreground'}
              aria-current={'page'}
              className="text-2xl"
            >
              {linkText}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUiNavbar>
  );
}
