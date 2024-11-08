import type { Config } from 'tailwindcss';
import uiComponentsConfig from '@scopemarkets/react-ui-components/tailwind.config';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,json}',
    './src/components/**/*.{js,ts,jsx,tsx,json}',
    './src/app/**/*.{js,ts,jsx,tsx,json}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        team: "url('/images/solutions/team.png')",
        vision: "url('/images/about/buildings.png')",
        contact: "url('/images/contact/contact.jpg')",
        rostro: "url('/images/homepage/rostro-banner.jpg')",
        computer: "url('/images/homepage/computerman.jpg')",
        header: "url('/images/homepage/header.jpg')",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '24px',
        desktop: '32px',
      },
    },
    screens: {
      desktop: '1558px',
    },
    colors: {
      blue: {
        1: '#1B00E2',
        2: '#030C24',
        3: '#CCD2DE',
        4: '#4B5873',
        5: '#0A1C41',
      },
      grey: '#F2F3F3',
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['sofia-pro', 'sans-serif'],
    },
    fontSize: {
      special: ['270px', '200px'],
      h1: ['96px', '96px'],
      h2: ['60px', '72px'],
      h3: ['42px', '48px'],
      h4: ['28px', '38px'],
      sub1: ['20px', '32px'],
      sub2: ['16px', '26px'],
      base: ['16px', '24px'], // body1
      body2: ['12px', '18px'],
    },
  },
  presets: [uiComponentsConfig],
};

export default config;
