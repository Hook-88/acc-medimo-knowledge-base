import comp from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/app/install.html.vue"
const data = JSON.parse("{\"path\":\"/app/install.html\",\"title\":\"App instaleren\",\"lang\":\"nl-NL\",\"frontmatter\":{\"sticky\":true,\"order\":1,\"articleType\":\"app\",\"star\":true,\"title\":\"App instaleren\",\"tags\":[\"instaleren\",\"app\",\"android\",\"ios\",\"apple\"],\"icon\":\"icon-park-solid:play\",\"tag\":[\"Installeren,\",\"App store,\",\"Play store,\",\"Apple,\",\"IOS,\",\"Android,\"],\"category\":\"MedimoApp\"},\"readingTime\":{\"minutes\":0.24,\"words\":71},\"filePathRelative\":\"app/install.md\"}")
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
