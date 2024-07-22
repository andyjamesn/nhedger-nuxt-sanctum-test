// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  devServer: {
    host: 'lighthouse.test',
    port: 5173,
  },
  modules: [["@hedger/nuxt-sanctum", {
    url: "http://api.lighthouse.test",
    csrf: {
      endpoint: "/sanctum/csrf-cookie",
    },
    check: {
      endpoint: "/me",
    },
    login: {
      endpoint: "/auth/login",
      redirectsTo: "/welcome",
    },
    logout: {
      endpoint: "/auth/logout",
      redirectsTo: "/",
    }
  }]],
})
