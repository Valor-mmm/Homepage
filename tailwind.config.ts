import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(button|link|navbar|ripple|spinner).js',
  ],
  theme: {
    extend: {},
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
