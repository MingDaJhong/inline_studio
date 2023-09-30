// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Inline Studio'
    }
  },
  vite: {
    plugins: [
      svgLoader({})
    ],
    define: {
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: false,
      __INTLIFY_PROD_DEVTOOLS__: false
    }
  },
  css: [
    '@/assets/css/main.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  modules: [
    '@vueuse/motion/nuxt',
    ['@nuxtjs/google-fonts',
      {
        families: {
          'Noto+Sans': [300, 400, 500, 600]
        }
      }
    ],
    'nuxt-lodash'
  ]
})
