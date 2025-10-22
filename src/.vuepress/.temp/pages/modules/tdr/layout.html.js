import comp from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/modules/tdr/layout.html.vue"
const data = JSON.parse("{\"path\":\"/modules/tdr/layout.html\",\"title\":\"Layout\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Layout\",\"icon\":\"object-group\",\"order\":2,\"category\":[\"Guide\"],\"tag\":[\"Layout\"]},\"readingTime\":{\"minutes\":0.35,\"words\":106},\"filePathRelative\":\"modules/tdr/layout.md\"}")
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
