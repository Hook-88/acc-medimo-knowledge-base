import comp from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/portfolio.html.vue"
const data = JSON.parse("{\"path\":\"/portfolio.html\",\"title\":\"Portfolio Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"portfolio\":true,\"title\":\"Portfolio Home\",\"icon\":\"house\",\"name\":\"Conan Edogawa\",\"avatar\":\"https://theme-hope-assets.vuejs.press/hero/conan.png\",\"titles\":[\"Genius young detective\",\"Lan’s childhood sweetheart\",\"The biggest rival of the black organization\"],\"footer\":false},\"readingTime\":{\"minutes\":0.25,\"words\":74},\"filePathRelative\":\"portfolio.md\"}")
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
