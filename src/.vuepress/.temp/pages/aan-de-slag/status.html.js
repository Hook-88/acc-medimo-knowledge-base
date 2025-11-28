import comp from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/aan-de-slag/status.html.vue"
const data = JSON.parse("{\"path\":\"/aan-de-slag/status.html\",\"title\":\"De Status\",\"lang\":\"nl-NL\",\"frontmatter\":{\"sticky\":true,\"order\":1,\"articleType\":\"web\",\"star\":true,\"title\":\"De Status\",\"tags\":[\"status\"],\"icon\":\"icon-park-solid:play\",\"tag\":[\"medicatie-status,\"],\"category\":\"Aan de slag\"},\"readingTime\":{\"minutes\":3.67,\"words\":1100},\"filePathRelative\":\"aan-de-slag/status.md\"}")
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
