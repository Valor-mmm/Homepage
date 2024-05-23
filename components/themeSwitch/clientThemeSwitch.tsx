'use client';

import { Switch } from '@nextui-org/switch';
import { MdLightMode, MdNightsStay } from 'react-icons/md';
import { useTheme } from 'next-themes';

interface ClientThemeSwitchProps {
  selectDarkThemeText: string;
  selectLightThemeText: string;
}

export const ClientThemeSwitch = ({
  selectDarkThemeText,
  selectLightThemeText,
}: ClientThemeSwitchProps) => {
  const { theme, setTheme } = useTheme();
  const a11yText =
    theme === 'light' ? selectDarkThemeText : selectLightThemeText;

  return (
    <Switch
      color="primary"
      size="lg"
      name={a11yText}
      aria-label={a11yText}
      isSelected={theme === 'light'}
      onValueChange={(isSelected) => {
        setTheme(isSelected ? 'light' : 'dark');
      }}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <MdLightMode className={className} />
        ) : (
          <MdNightsStay className={className} />
        )
      }
    />
  );
};
