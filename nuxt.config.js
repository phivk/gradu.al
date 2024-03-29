export default {
  target: "static",
  /*
   ** Headers of the page
   */
  head: {
    title: "Gradual - Here to learn",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: process.env.npm_package_description || "",
      },
      {
        hid: "og:description",
        name: "og:description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "//gc.zgo.at/count.js",
        "data-goatcounter": "https://gradual.goatcounter.com/count",
        async: true,
        body: true,
      },
    ],
  },
  /*
   ** Runtime Config https://nuxtjs.org/tutorials/moving-from-nuxtjs-dotenv-to-runtime-config/
   */
  publicRuntimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
    communityName: process.env.COMMUNITY_NAME,
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    // 'tachyons/css/tachyons.css',
    "@/assets/css/main.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/fontawesome.js",
    "~/plugins/global.js",
    "~/plugins/supabase.client.js",
  ],
  /*
   * https://nuxtjs.org/docs/configuration-glossary/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/tailwindcss"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxt/content",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "nuxt-password-protect",
  ],
  auth: {
    strategies: {
      slack: {
        scheme: "oauth2",
        endpoints: {
          authorization: "https://slack.com/oauth/v2/authorize",
          token: "/api/slack-token",
        },
        token: {
          property: "authed_user.access_token",
          type: "Bearer",
          maxAge: 1800,
        },
        refreshToken: {
          property: "refresh_token",
          maxAge: 60 * 60 * 24 * 30,
        },
        scope: [],
        responseType: "code",
        grantType: "authorization_code",
        accessType: undefined,
        redirectUri: process.env.SLACK_REDIRECT_URI,
        logoutRedirectUri: undefined,
        clientId: process.env.SLACK_CLIENT_ID,
        user_scope: "identity.basic",
        state: "UNIQUE_AND_NON_GUESSABLE",
        codeChallengeMethod: "",
        responseMode: "",
        acrValues: "",
      },
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.scss",
    tailwindcss: {
      jit: true,
    },
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
    extend(config, ctx) {},
  },
  passwordProtect: {
    enabled: true,
    formPath: "/password",
    password: process.env.COEE_PASSWORD,
    tokenSeed: 101010,
    queryString: "_pw",
    cookieName: "_password",
    cookie: {
      prefix: "",
      expires: 5,
    },
    ignoredPaths: ["/public-page"],
  },
};
