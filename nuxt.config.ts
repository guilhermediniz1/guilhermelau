export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  googleFonts: {
    families: {
      'Barlow': [400, 700, 900],
      'Barlow Condensed': [400, 600],
      'IBM Plex Mono': [400],
    },
    display: 'swap',
  },
  css: ['~/assets/css/main.css'],
})
