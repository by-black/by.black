const url = 'https://by.black/'
const title = 'Black Inc.'
const description = 'Black Inc.'
const color = '#000000'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    link: [
      { rel: 'canonical', href: url },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [{ src: '~assets/fonts.com/demo-async.css' }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  pwa: {
    workbox: {},
    meta: {
      name: title,
      author: process.env.npm_package_author_name,
      description,
      theme_color: color,
      lang: 'ja',
      ogType: 'website',
      ogSiteName: title,
      ogTitle: title,
      ogDescription: description,
      ogHost: url,
      ogImage: 'black.png',
      ogUrl: url,
      twitterCard: 'summary_large_image',
      twitterSite: '',
      twitterCreator: ''
    },
    icon: {},
    manifest: {
      background_color: color,
      description,
      lang: 'ja',
      name: title,
      short_name: title,
      theme_color: color
    }
  },
  googleAnalytics: { id: 'UA-132845166-1' },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    extend(config, ctx) {}
  }
}
