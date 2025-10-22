import comp from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/guide/bar/baz.html.vue"
const data = JSON.parse("{\"path\":\"/guide/bar/baz.html\",\"title\":\"Baz\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Baz\",\"icon\":\"circle-info\"},\"readingTime\":{\"minutes\":0.03,\"words\":8},\"filePathRelative\":\"guide/bar/baz.md\"}")
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
