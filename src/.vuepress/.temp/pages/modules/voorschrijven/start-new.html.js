import comp from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/modules/voorschrijven/start-new.html.vue"
const data = JSON.parse("{\"path\":\"/modules/voorschrijven/start-new.html\",\"title\":\"Medicatie starten\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Medicatie starten\",\"icon\":\"icon-park-solid:play\",\"order\":1,\"author\":false,\"category\":[\"Voorschrijven\"],\"tag\":[\"Starten,\",\"Nieuw,\",\"Geneesmiddel\"],\"sticky\":true,\"star\":true,\"editLink\":false,\"contributors\":false,\"articleType\":\"web\"},\"readingTime\":{\"minutes\":1.61,\"words\":482},\"filePathRelative\":\"modules/voorschrijven/start-new.md\"}")
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
