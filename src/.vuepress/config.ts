import { defineUserConfig } from "vuepress"
import { docsearchPlugin } from "@vuepress/plugin-docsearch"
import theme from "./theme.js"

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Medimo kennisbank",
  description: "Kennisbank van Medimo.",

  // This is for register new users
  head: [
    [
      "meta",
      {
        name: "algolia-site-verification",
        content: "2A12CAC6C57275C7",
      },
    ],
    [
      "script",
      { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
    ],
  ],

  theme,

  plugins: [
    docsearchPlugin({
      appId: "YOUR_APP_ID",
      apiKey: "YOUR_SEARCH_API_KEY",
      indices: [
        {
          name: "medimo_kb_crawler",
        },
      ],
      locales: {
        "/": {
          placeholder: "Zoeken in kennisbank...",
        },
      },
    }),
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
})
