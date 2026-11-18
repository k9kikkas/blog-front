// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  telemetry: false,
  modules: [
    '@primevue/nuxt-module',
  ],
  primevue: {
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: 'system',
          cssLayer: false
        }
      }
    }

  },
  runtimeConfig: {
        public: {
            PRIMEUI_LICENSE: process.env.NUXT_PUBLIC_PRIMEUI_LICENSE
        }
    }
})
