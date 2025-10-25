import comp from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/modules/voorschrijven/index.html.vue"
const data = JSON.parse("{\"path\":\"/modules/voorschrijven/\",\"title\":\"Voorschrijven\",\"lang\":\"nl-NL\",\"frontmatter\":{\"title\":\"Voorschrijven\",\"icon\":\"hugeicons:doctor-01\",\"category\":[\"voorschrijven\"],\"comment\":false,\"contributors\":false,\"editLink\":false,\"lastUpdated\":false,\"pageInfo\":false},\"readingTime\":{\"minutes\":0.09,\"words\":28},\"filePathRelative\":\"modules/voorschrijven/README.md\"}")
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
