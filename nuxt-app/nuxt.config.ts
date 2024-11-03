// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  imports: {
    autoImport: true, // Ensure this is set to true
  },
  server: {
    port: 3002 // Default: 3000
  }
})
