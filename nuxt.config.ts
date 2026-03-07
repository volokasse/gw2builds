import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  srcDir: 'app/',
  ssr: true,

  compatibilityDate: '2025-10-30',

  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `
            @import "@/assets/scss/_variables.scss"';
          `
        }
      }
    }
  },

  typescript: {
    strict: true,
    // on coupe le checker live bugué sous Windows,
    // mais l'IDE reste strict, et on pourra lancer vue-tsc à la main
    typeCheck: false
  },

  runtimeConfig: {
    // privé (server only)
    sessionSecret: process.env.SESSION_SECRET,
    databaseUrl: process.env.DATABASE_URL,

    // public (exposé client)
    public: {
      appName: 'GW2 Builds'
    }
  },

  app: {
    head: {
      title: 'GW2 Builds',
      meta: [
        { name: 'description', content: 'Stocke, partage et explore des builds Guild Wars 2.' },
        { name: 'color-scheme', content: 'dark' }
      ],
      bodyAttrs: {
        class: 'antialiased'
      },
      htmlAttrs: { class: 'dark' }
    }
  },

  devServer: {
    port: process.env.NUXT_PORT ? Number(process.env.NUXT_PORT) : 3000,
    host: process.env.NUXT_HOST || '0.0.0.0'
  },

  alias: {
    '@': fileURLToPath(new URL('.', import.meta.url))
  }
})
