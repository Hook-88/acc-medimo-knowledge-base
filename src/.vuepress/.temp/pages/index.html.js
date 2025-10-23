import comp from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"nl-NL\",\"frontmatter\":{\"home\":true,\"icon\":\"house\",\"title\":\"Home\",\"heroImage\":\"/assets/image/enovation-medimo-logo.webp\",\"heroText\":\"Medimo kennisbank\",\"tagline\":\"Voor Beschrijvingen, Hulpkaarten, FAQ's en Video's.\",\"actions\":[{\"text\":\"How to Use\",\"icon\":\"lightbulb\",\"link\":\"./demo/\",\"type\":\"primary\"},{\"text\":\"Docs\",\"link\":\"./guide/\"}],\"highlights\":[{\"header\":\"Zoek hier in de kennisbank\",\"bgImage\":\"https://theme-hope-assets.vuejs.press/bg/3-light.svg\",\"bgImageDark\":\"https://theme-hope-assets.vuejs.press/bg/3-dark.svg\"},{\"header\":\"Bekijk per categorie\",\"description\":\"Klik hieronder op de categorie om de beschikbare artikelen na te bekijken.\",\"bgImage\":\"https://theme-hope-assets.vuejs.press/bg/2-light.svg\",\"bgImageDark\":\"https://theme-hope-assets.vuejs.press/bg/2-dark.svg\",\"bgImageStyle\":{\"background-repeat\":\"repeat\",\"background-size\":\"initial\"},\"features\":[{\"title\":\"Toedienregistratie\",\"icon\":\"clipboard-check\",\"details\":\"Alles over de werking en gebruik van de toedienregistratie.\",\"link\":\"https://theme-hope.vuejs.press/guide/markdown/others.html#link-check\"},{\"title\":\"Voorschrijven\",\"icon\":\"box-archive\",\"details\":\"Instructies voor het invoeren van medicatie-opdrachten.\",\"link\":\"https://theme-hope.vuejs.press/guide/markdown/stylize/hint.html\"},{\"title\":\"Koppelingen\",\"icon\":\"bell\",\"details\":\"Alles systemen waarmee gekoppeld kan worden.\",\"link\":\"https://theme-hope.vuejs.press/guide/markdown/stylize/alert.html\"}]}],\"copyright\":false,\"footer\":\"Theme by <a href=\\\"https://theme-hope.vuejs.press/\\\" target=\\\"_blank\\\">VuePress Theme Hope</a> | MIT Licensed, Copyright © 2019-present Mr.Hope\"},\"readingTime\":{\"minutes\":4.05,\"words\":1216},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
