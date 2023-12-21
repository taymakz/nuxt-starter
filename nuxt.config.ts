// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ],
  runtimeConfig: {
    public: {
      baseApi: '', // Base Api environment variable
      baseStorage: '', // Base Media environment variable
      domain: '', // Domain environment variable
    },
  },
  colorMode: {
    classSuffix: '',
  },
  ui: {
    icons: ['mdi', 'carbon'],
  },
  tailwindcss: {
    viewer: false,
  },

  devtools: { enabled: true },
})
