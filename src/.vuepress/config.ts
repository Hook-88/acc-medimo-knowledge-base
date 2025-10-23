import { defineUserConfig } from "vuepress"
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

  //   plugins: [
  //     docsearchPlugin({
  //       appId: "D4MZD1C7ER",
  //       apiKey: "009150d188c840ffc15f7c446866524e",
  //       indices: [
  //         {
  //           name: "medimo_pages",
  //         },
  //       ],
  //       locales: {
  //         "/": {
  //           placeholder: "Zoeken in kennisbank...",
  //         },
  //       },
  //     }),
  //   ],

  // Enable it with pwa
  // shouldPrefetch: false,
})
