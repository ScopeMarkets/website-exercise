/** @type {import('next-i18next').UserConfig} */
module.exports = {
  debug: false,
  i18n: {
    defaultLocale: 'en',
    locales: process.env.LOCALES?.split(',') ?? ['en'],
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
