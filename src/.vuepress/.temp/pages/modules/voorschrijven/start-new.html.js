import comp from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/modules/voorschrijven/start-new.html.vue"
const data = JSON.parse("{\"path\":\"/modules/voorschrijven/start-new.html\",\"title\":\"Medicatie starten\",\"lang\":\"nl-NL\",\"frontmatter\":{\"sticky\":true,\"order\":1,\"articleType\":\"web\",\"star\":true,\"title\":\"Medicatie starten\",\"icon\":\"icon-park-solid:play\",\"tag\":[\"Starten,\",\"Nieuw,\",\"Geneesmiddel\"],\"category\":\"Voorschrijven\"},\"readingTime\":{\"minutes\":1.43,\"words\":429},\"filePathRelative\":\"modules/voorschrijven/start-new.md\"}")
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
