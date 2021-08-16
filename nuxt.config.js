const apiStrapi = process.env.API_STRAPI || 'http://localhost:1337'

export default {
  head: {
    title: 'Nuxt Dashboard',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/app.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/after-each.js', mode: 'client' },
    { src: '~/plugins/yandex-map.js', mode: 'client' },
    { src: '~plugins/leaflet.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
    '@nuxtjs/tailwindcss',
    '@nuxt/typescript-build',
  ],

  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://strapi.nuxtjs.org/
    '@nuxtjs/strapi',
  ],

  axios: {},
  strapi: {
    url: apiStrapi,
    entities: [
      { name: 'products', type: 'collection' },
      { name: 'brands', type: 'collection' },
      { name: 'categories', type: 'collection' },
      { name: 'pages', type: 'collection' },
      { name: 'settings', type: 'single' },
    ],
    key: 'userJwt',
    expires: '1d',
  },
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ],
    },
    publicPath: '/assets/',
    extractCSS: true,
    // parallel: true,
    quiet: false,
    analyze: false,
    splitChunks: {
      layouts: false,
      pages: true,
      commons: true,
    },
  },
}
