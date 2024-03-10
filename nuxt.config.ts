// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  typescript: { strict: true, typeCheck: true },
  devtools: { enabled: true },

  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxt/test-utils/module',
  ],

  runtimeConfig: {
    public: {
      // eslint-disable-next-line node/prefer-global/process
      myValue: process.env.OTHER_ENV_VAR,
      auth: {
        // NUXT_AUTH_KEY
        key: 'KKE', // default here
      },
      // NUXT_MY_KEY
      myKey: '',
      typiUrl: 'https://jsonplaceholder.typicode.com',
    },
  },

  experimental: {
    cookieStore: true,
    defaults: {
      useAsyncData: {
        deep: false,
      },
    },
  },
})
