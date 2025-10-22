import comp from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/modules/voorschrijven/page.html.vue"
const data = JSON.parse("{\"path\":\"/modules/voorschrijven/page.html\",\"title\":\"Medicatie starten\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Medicatie starten\",\"icon\":\"solar:pen-new-square-linear\",\"order\":1,\"category\":[\"Voorschrijven\"],\"tag\":[\"Starten,\",\"Nieuw,\",\"Geneesmiddel\"],\"sticky\":true,\"star\":true,\"description\":\"Dit artikel beschrijft hoe je nieuwe medicatie start. In dit artikel gaan we ervan uit dat je bekend bent met de status en hoe je die opzoekt. Page Title The first H1 title in M...\"},\"readingTime\":{\"minutes\":1.21,\"words\":363},\"filePathRelative\":\"modules/voorschrijven/page.md\",\"autoDesc\":true}")
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
