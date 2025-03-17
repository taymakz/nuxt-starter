import tailwindcss from '@tailwindcss/vite'
import { appDescription, appTitle } from './app/constants'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    'motion-v/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-lucide-icons',
    'nuxt-phosphor-icons',
    '@nuxtjs/google-fonts',
    'dayjs-nuxt',
    '@vee-validate/nuxt',
    './app/modules/shadcn',
  ],
  devtools: { enabled: true },
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      htmlAttrs: {
        dir: 'rtl',
        lang: 'fa-IR',
      },
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
    },
  },
  css: [
    '~/assets/styles/app.css',
  ],

  colorMode: {
    classSuffix: '',
  },
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
    watcher: 'parcel',
  },
  compatibilityDate: '2024-11-01',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  dayjs: {
    plugins: ['relativeTime', 'timezone'],
  },
  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
  googleFonts: {
    families: {
      'Inter': [400, 500],
      'DM Mono': [400, 500],
      'Roboto Condensed': [400, 500],
      'Bad Script': [400, 500],

    },
  },
})
