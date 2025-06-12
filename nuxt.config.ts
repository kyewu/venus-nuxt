// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt',
    '@nuxt/content',
  ],
  pinia: {
    autoImports: [
      'defineStore', // import { defineStore } from 'pinia'
      'storeToRefs', // import { storeToRefs } from 'pinia'
    ],
  },
  pwa: {},
  devServer: {
    port: Number.parseInt(process.env.PORT || ''),
  },
})
