import comp from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/modules/voorschrijven copy/page.html.vue"
const data = JSON.parse("{\"path\":\"/modules/voorschrijven%20copy/page.html\",\"title\":\"Page Config\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Page Config\",\"icon\":\"file\",\"order\":3,\"author\":\"Ms.Hope\",\"date\":\"2020-01-01T00:00:00.000Z\",\"category\":[\"Guide\"],\"tag\":[\"Page config\",\"Guide\"],\"sticky\":true,\"star\":true,\"footer\":\"Footer content for test\",\"copyright\":\"No Copyright\",\"description\":\"Content before more comment is regarded as page excerpt. Page Title The first H1 title in Markdown will be regarded as page title. You can also set title in Markdown's Frontmatt...\"},\"readingTime\":{\"minutes\":1.14,\"words\":341},\"filePathRelative\":\"modules/voorschrijven copy/page.md\",\"autoDesc\":true}")
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
