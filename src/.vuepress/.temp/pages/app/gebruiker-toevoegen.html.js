import comp from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/app/gebruiker-toevoegen.html.vue"
const data = JSON.parse("{\"path\":\"/app/gebruiker-toevoegen.html\",\"title\":\"Gebruiker toevoegen\",\"lang\":\"nl-NL\",\"frontmatter\":{\"title\":\"Gebruiker toevoegen\",\"category\":\"MedimoApp\",\"order\":2,\"articleType\":\"app\",\"tags\":[\"sms\",\"oidc\",\"sso\",\"koppelen\",\"gebruiker\"]},\"readingTime\":{\"minutes\":0.68,\"words\":205},\"filePathRelative\":\"app/gebruiker-toevoegen.md\"}")
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
