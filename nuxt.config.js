export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'felicia',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  target: 'static',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
//    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/toast'
  ],

  toast: {
    position: 'top-center',
    register: [
      // Register custom toasts
      {
        name: 'success',
        message: 'Form submitted successfully!',
        options: {
          type: 'info',
          duration: 5000,
          class: 'rounded-xl',
        },
      },
      {
        name: 'error',
        message: 'An unknown error occured',
        options: {
          type: 'error',
          duration: 5000,
          class: 'rounded-xl',
        },
      },
      {
        name: 'fillAll',
        message: 'Please fill all required fields.',
        options: {
          type: 'error',
          duration: 5000,
          class: 'rounded-xl',
        },
      },
    ],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  }
}
