import comp from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/modules/tdr/encrypt.html.vue"
const data = JSON.parse("{\"path\":\"/modules/tdr/encrypt.html\",\"title\":\"Encryption Article\",\"lang\":\"nl-NL\",\"frontmatter\":{\"icon\":\"lock\",\"category\":[\"Guide\"],\"tag\":[\"encryption\"]},\"readingTime\":{\"minutes\":0.3,\"words\":90},\"filePathRelative\":\"modules/tdr/encrypt.md\"}")
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
