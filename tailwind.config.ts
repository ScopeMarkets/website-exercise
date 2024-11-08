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
        primary: {
          100: '#CCDDFF',
          200: '#99BBFF',
          300: '#6699FF',
          400: '#3377FF',
          500: '#0055FF',
          600: '#0044CC',
          700: '#003399',
          800: '#002266',
          900: '#001133',
        },
        neutral: {
          100: '#F8F9FA',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
        },
        'sky-blue': {
          100: '#D1F6FF',
          200: '#9EEDFF',
          300: '#6BE3FF',
          400: '#38D9FF',
          500: '#03CFFF',
          600: '#00A9D1',
          700: '#00809E',
          800: '#00576B',
          900: '#002D38',
        },
        'emerald-green': {
          100: '#A1FCE6',
          200: '#6FFBD9',
          300: '#3EF9CD',
          400: '#0CF8C0',
          500: '#06CB9C',
          600: '#059A76',
          700: '#036850',
          800: '#02362A',
          900: '#000504',
        },
        'imperial-red': {
          100: '#FFEBEC',
          200: '#FEB9BD',
          300: '#FEB9BD',
          400: '#FC555F',
          500: '#FC535E',
          600: '#FB2231',
          700: '#E70413',
          800: '#B4030F',
          900: '#82020B',
        },
        'amber-yellow': {
          100: '#FFF1CC',
          200: '#FFE499',
          300: '#FFD666',
          400: '#FFC933',
          500: '#FFBB00',
          600: '#CC9600',
          700: '#997000',
          800: '#664B00',
          900: '#332500',
        },
        blue: {
          1: '#1B00E2',
          2: '#030C24',
          3: '#CCD2DE',
          4: '#4B5873',
          5: '#0A1C41',
        },
        grey: '#F2F3F3',
        white: '#FFFFFF',
        black: '#000000',
        transparent: 'transparent',
      },
      fontFamily: {
        sans: ['sofia-pro', 'sans-serif'],
      },
    },
  },
};

export default config;
