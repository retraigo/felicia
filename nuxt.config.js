import Meta from "./data/Meta"

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'International Virtual Conference on Machine Learning Applications in Applied Sciences and Mathematics',
    titleTemplate: `%s - ${Meta.siteName}`,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: Meta.description },
      { hid: 'themecolor', name: 'theme-color', content: Meta.themeColor},
      { hid: 'og:description', name: 'og:description', content: Meta.description },
      { hid: 'og:image', name: 'og:image', content: Meta.image },
      { hid: 'og:imageAlt', name: 'og:image:alt', content: Meta.siteName },
      { hid: 'og:siteName', name: 'og:site_name', content: Meta.siteName },
      { hid: 'og:determiner', name: 'og:determiner', content: Meta.determiner },
      { hid: 'og:type', name: 'og:type', content: Meta.type },
      { hid: 'tilecolor', name: 'msapplication-TileColor', content: Meta.tileColor},
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', sizes: '32x32', type: 'image/png', href: Meta.icon32 },
      { rel: 'icon', sizes: '16x16', type: 'image/png', href: Meta.icon16 },
      { rel: 'manifest', href: Meta.manifest },
      { rel: 'mask-icon',  color: "#5bbad5", href: Meta.maskIcon },
      { rel: 'apple-touch-icon', sizes: '180x180', href: Meta.apple },
    ]
  },
  target: 'static',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/transition.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/jsonld.js',
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
    '@nuxtjs/sitemap',
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
