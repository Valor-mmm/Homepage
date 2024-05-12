import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './features/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(button|card|divider|link|navbar|tabs|ripple|spinner).js',
  ],
  theme: {
    extend: {
      minWidth: {
        page: '50vw',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: '#13c6e4',
            secondary: '#0b3961',
          },
        },
        dark: {
          colors: {
            primary: '#13c6e4',
            secondary: '#0b3961',
          },
        },
      },
    }),
  ],
};
export default config;
