import comp from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/aan-de-slag/index.html.vue"
const data = JSON.parse("{\"path\":\"/aan-de-slag/\",\"title\":\"Aan de slag\",\"lang\":\"nl-NL\",\"frontmatter\":{\"title\":\"Aan de slag\",\"order\":0,\"articleType\":\"geen\",\"icon\":\"cib:app-store\",\"category\":\"Aan de slag\"},\"readingTime\":{\"minutes\":0.08,\"words\":25},\"filePathRelative\":\"aan-de-slag/README.md\"}")
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
