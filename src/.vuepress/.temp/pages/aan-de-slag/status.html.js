import comp from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/aan-de-slag/status.html.vue"
const data = JSON.parse("{\"path\":\"/aan-de-slag/status.html\",\"title\":\"De Status\",\"lang\":\"nl-NL\",\"frontmatter\":{\"title\":\"De Status\",\"icon\":\"icon-park-solid:play\",\"order\":1,\"category\":[\"Aan de slag\"],\"tag\":[\"medicatie-status,\"],\"sticky\":true,\"star\":true,\"articleType\":\"web\"},\"readingTime\":{\"minutes\":0.27,\"words\":80},\"filePathRelative\":\"aan-de-slag/status.md\"}")
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
