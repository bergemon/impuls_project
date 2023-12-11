/** @type {import('next-i18next').UserConfig} */

module.exports = {
  i18n: {
    defaultLocale: 'es',
    localeDetection: false,
    locales: ['es', 'en', 'ru'],
    domains: [
      {
        domain: 'example.com',
        defaultLocale: 'es'
      },
      {
        domain: 'example.com/en',
        defaultLocale: 'en'
      },
      {
        domain: 'example.com/ru',
        defaultLocale: 'ru'
      }
    ]
  },
  localePath:
    typeof window === 'undefined'
    ? require('path').resolve('./public/locales')
    : '/locales',
    reloadOnPrerender: process.env.NODE_ENV === 'development'
}