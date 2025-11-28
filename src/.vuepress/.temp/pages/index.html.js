import comp from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"nl-NL\",\"frontmatter\":{\"home\":true,\"icon\":\"house\",\"title\":\"Home\",\"heroImage\":\"/assets/image/enovation-medimo-logo.webp\",\"heroText\":\"Medimo kennisbank\",\"tagline\":\"Voor Beschrijvingen, Hulpkaarten, FAQ's en Video's.\",\"copyright\":false,\"footer\":\"MIT Licensed, Copyright © 2025 Hook88 b.v.\"},\"readingTime\":{\"minutes\":0.26,\"words\":78},\"filePathRelative\":\"README.md\"}")
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
