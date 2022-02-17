// import colors from 'vuetify/es5/util/colors'

import {
  primaryColor,
  secondaryColor,
  errorColor,
  successColor,
  accentColor,
  warningColor,
  Gray500,
  Gray700,
  purpleColor,
  darkGreen,
  lightGreen,
  Gray100,
  Purple600,
  Purple50,
} from "./vuetify.options";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode

  generate: {
    routes: ["/"],
    dir: "public",
  },
  buildDir: "dist",
  target: "static",
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - fidia",
    title: "fidia",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/fonts/Inter/stylesheet.css",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: "~/assets/main.scss", lang: "scss" }],

  // set src as default
  srcDir: "src/",

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      options: {
        customProperties: true,
      },
      themes: {
        light: {
          primary: primaryColor,
          accent: accentColor,
          secondary: secondaryColor,
          warning: warningColor,
          error: errorColor,
          success: successColor,
          Gray500: Gray500,
          Gray700: Gray700,
          purpleColor: purpleColor,
          darkGreen: darkGreen,
          lightGreen: lightGreen,
          Gray100: Gray100,
          Purple600: Purple600,
          Purple50: Purple50,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
