const pkg = require('./package')
const url = 'https://by.black/'
const title = 'Black Inc.'
const color = '#0a0a0a'

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    link: [
      { rel: 'canonical', href: url },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700'
      }
    ]
  },
  meta: {
    name: title,
    author: pkg.author,
    description: pkg.description,
    theme_color: color,
    lang: 'ja',
    ogType: 'website',
    ogSiteName: title,
    ogTitle: title,
    ogDescription: pkg.description,
    ogHost: url,
    ogImage: 'madebyblack.png',
    ogUrl: url
  },
  manifest: {
    background_color: color,
    description: pkg.description,
    lang: 'ja',
    name: title,
    short_name: title,
    theme_color: color
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

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
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
