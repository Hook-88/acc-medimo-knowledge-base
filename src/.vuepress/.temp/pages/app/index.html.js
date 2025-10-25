import comp from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/app/index.html.vue"
const data = JSON.parse("{\"path\":\"/app/\",\"title\":\"MedimoApp\",\"lang\":\"nl-NL\",\"frontmatter\":{\"editLink\":false,\"lastUpdated\":false,\"title\":\"MedimoApp\",\"order\":0,\"articleType\":\"geen\",\"contributors\":false,\"icon\":\"cib:app-store\",\"pageInfo\":false,\"category\":\"Voorschrijven\",\"comment\":false},\"readingTime\":{\"minutes\":0.1,\"words\":31},\"filePathRelative\":\"app/README.md\"}")
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
