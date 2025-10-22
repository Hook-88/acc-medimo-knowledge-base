import comp from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/app/install.html.vue"
const data = JSON.parse("{\"path\":\"/app/install.html\",\"title\":\"App instaleren\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"App instaleren\",\"icon\":\"icon-park-solid:play\",\"order\":1,\"category\":[\"MedimoApp\"],\"tag\":[\"Installeren,\",\"App store,\",\"Play store,\",\"Apple,\",\"IOS,\",\"Android,\"],\"sticky\":true,\"star\":true,\"articleType\":\"app\"},\"readingTime\":{\"minutes\":0.34,\"words\":101},\"filePathRelative\":\"app/install.md\"}")
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
