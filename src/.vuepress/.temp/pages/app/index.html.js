import comp from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/app/index.html.vue"
const data = JSON.parse("{\"path\":\"/app/\",\"title\":\"MedimoApp\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"MedimoApp\",\"icon\":\"cib:app-store\",\"category\":[\"voorschrijven\"],\"comment\":false,\"contributors\":false,\"editLink\":false,\"lastUpdated\":false,\"pageInfo\":false},\"readingTime\":{\"minutes\":0.09,\"words\":27},\"filePathRelative\":\"app/README.md\"}")
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
