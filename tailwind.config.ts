import { type Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,json}',
    './src/components/**/*.{js,ts,jsx,tsx,json}',
    './src/app/**/*.{js,ts,jsx,tsx,json}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      desktop: '1160px',
    },
    extend: {
      colors: {
        blue: {
          1: '#1B00E2',
          2: '#030C24',
          3: '#CCD2DE',
          4: '#4B5873',
          5: '#0A1C41',
        },
        grey: '#F2F3F3',
      },
      fontFamily: {
        sans: ['sofia-pro', 'sans-serif'],
      },
    },
  },
};

export default config;
