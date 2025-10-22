import comp from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/modules/toedienregistratie/index.html.vue"
const data = JSON.parse("{\"path\":\"/modules/toedienregistratie/\",\"title\":\"Voorschrijven\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Voorschrijven\",\"index\":false,\"icon\":\"hugeicons:doctor-01\",\"category\":[\"voorschrijven\"]},\"readingTime\":{\"minutes\":0.04,\"words\":12},\"filePathRelative\":\"modules/toedienregistratie/README.md\"}")
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
