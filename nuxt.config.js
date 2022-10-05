export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Inventário",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "/assets/css/nucleo-icons.css" },
      { rel: "stylesheet", href: "/assets/css/nucleo-svg.css" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700",
      },
      {
        rel: "stylesheet",
        href: "/assets/css/soft-ui-dashboard.min.css?v=1.0.9",
      },
    ],
    script: [
      { src: "https://kit.fontawesome.com/42d5adcbca.js" },
      { src: "/assets/js/core/popper.min.js" },
      { src: "/assets/js/core/bootstrap.min.js" },
      { src: "/assets/js/plugins/perfect-scrollbar.min.js" },
      { src: "/assets/js/plugins/smooth-scrollbar.min.js" },

      { src: "/assets/js/plugins/dragula/dragula.min.js" },
      { src: "/assets/js/plugins/jkanban/jkanban.js" },
      { src: "/assets/js/plugins/chartjs.min.js" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
  ],

  auth: {
    strategies: {
      local: {
        token: {
          property: "token",
          // global: true,
          // required: true,
          type: "Bearer",
        },
        user: {
          property: false,
          // autoFetch: true
        },
        endpoints: {
          login: { url: "/auth", method: "post", propertyName: "data.token" },
          logout: { url: "/logout", method: "post" },
          user: { url: "/me", method: "get", propertyName: "data.user" },
        },
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: "http://localhost:8000/api",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
