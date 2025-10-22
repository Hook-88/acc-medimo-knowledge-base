import { defineUserConfig } from "vuepress"

import theme from "./theme.js"

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Medimo kennisbank",
  description: "Kennisbank van Medimo.",

  head: [
    [
      "script",
      { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
    ],
  ],

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
})
