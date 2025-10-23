import comp from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/modules/tdr/markdown.html.vue"
const data = JSON.parse("{\"path\":\"/modules/tdr/markdown.html\",\"title\":\"Markdown Enhance\",\"lang\":\"nl-NL\",\"frontmatter\":{\"title\":\"Markdown Enhance\",\"icon\":\"fa6-brands:markdown\",\"order\":2,\"category\":[\"Guide\"],\"tag\":[\"Markdown\"],\"gitInclude\":[\"README.md\"]},\"readingTime\":{\"minutes\":2.33,\"words\":699},\"filePathRelative\":\"modules/tdr/markdown.md\"}")
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
