import comp from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/modules/index.html.vue"
const data = JSON.parse("{\"path\":\"/modules/\",\"title\":\"Modules\",\"lang\":\"nl-NL\",\"frontmatter\":{\"title\":\"Modules\",\"index\":false,\"icon\":\"lightbulb\",\"category\":[\"modules\"]},\"readingTime\":{\"minutes\":0.03,\"words\":10},\"filePathRelative\":\"modules/README.md\"}")
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
