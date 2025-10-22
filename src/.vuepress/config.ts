import { defineUserConfig } from "vuepress"

import theme from "./theme.js"

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Medimo kennisbank",
  description: "Kennisbank van Medimo.",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
})
