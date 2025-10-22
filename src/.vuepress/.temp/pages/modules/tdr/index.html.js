import comp from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/modules/tdr/index.html.vue"
const data = JSON.parse("{\"path\":\"/modules/tdr/\",\"title\":\"Toedienregistratie\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Toedienregistratie\",\"index\":false,\"icon\":\"hugeicons:tap-07\",\"category\":[\"toedienregistratie\"]},\"readingTime\":{\"minutes\":0.04,\"words\":12},\"filePathRelative\":\"modules/tdr/README.md\"}")
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
