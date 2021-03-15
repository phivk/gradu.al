
export default {
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Gradual - Here to learn',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'twitter:description', name: 'twitter:description', content: process.env.npm_package_description || '' },
      { hid: 'og:description', name: 'og:description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: '//gc.zgo.at/count.js',
        'data-goatcounter': "https://gradual.goatcounter.com/count",
        async: true,
        body: true,
      },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'tachyons/css/tachyons.css',
    '@/assets/css/main.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/content',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  auth: {
    strategies: {
      slack: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://slack.com/oauth/v2/authorize',
          token: '/api/slack-token',
        },
        token: {
          property: 'authed_user.access_token',
          type: 'Bearer',
          maxAge: 1800
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30
        },
        scope: [],
        responseType: 'code',
        grantType: 'authorization_code',
        accessType: undefined,
        redirectUri: process.env.SLACK_REDIRECT_URI,
        logoutRedirectUri: undefined,
        clientId: process.env.SLACK_CLIENT_ID,
        user_scope: "identity.basic",
        state: 'UNIQUE_AND_NON_GUESSABLE',
        codeChallengeMethod: '',
        responseMode: '',
        acrValues: ''
      }
    }
  },
  /*
  ** https://content.nuxtjs.org/configuration
  */
  content: {
    // Options
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
