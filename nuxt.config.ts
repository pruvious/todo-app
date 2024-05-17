// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['pruvious'],

  pruvious: {
    jwt: {
      secretKey: 'tE7yVSd3vKyknH8UZel4jecgUhWBEl7jSMukUzBuW4O807yiFPeF5Ymo8yFJ4gyG',
    },
  },
})
