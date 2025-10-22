import comp from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/guide/foo/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/foo/\",\"title\":\"Foo feature\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Foo feature\",\"icon\":\"lightbulb\"},\"readingTime\":{\"minutes\":0.05,\"words\":15},\"filePathRelative\":\"guide/foo/README.md\"}")
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
