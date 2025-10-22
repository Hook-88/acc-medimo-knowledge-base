export const themeData = JSON.parse("{\"encrypt\":{\"config\":{\"/demo/encrypt.html\":{\"tokens\":[\"$2b$10$ADQuU9ttXdGHY7QNVOOAJ.bqJr/TeVI/ZjBX.uN1lpjCUpeEhdPV.\"],\"hint\":\"Password: 1234\"}}},\"author\":{\"name\":\"Hook88 b.v.\",\"url\":\"https://google.com\"},\"logo\":\"/assets/image/enovation-medimo-logo.webp\",\"docsDir\":\"src\",\"contributors\":false,\"displayFooter\":true,\"pageInfo\":[\"ReadingTime\",\"Original\",\"Category\",\"Tag\"],\"locales\":{\"/\":{\"lang\":\"en-US\",\"navbarLocales\":{\"langName\":\"English\",\"selectLangAriaLabel\":\"Select language\"},\"metaLocales\":{\"author\":\"Author\",\"date\":\"Writing Date\",\"origin\":\"Original\",\"views\":\"Page views\",\"category\":\"Category\",\"tag\":\"Tag\",\"readingTime\":\"Reading Time\",\"words\":\"Words\",\"toc\":\"On This Page\",\"prev\":\"Prev\",\"next\":\"Next\",\"contributors\":\"Contributors\",\"editLink\":\"Edit this page\",\"print\":\"Print\"},\"outlookLocales\":{\"themeColor\":\"Theme Color\",\"darkmode\":\"Theme Mode\",\"fullscreen\":\"Full Screen\"},\"encryptLocales\":{\"iconLabel\":\"Page Encrypted\",\"placeholder\":\"Enter password\",\"remember\":\"Remember password\",\"errorHint\":\"Please enter the correct password!\"},\"routerLocales\":{\"skipToContent\":\"Skip to main content\",\"notFoundTitle\":\"Page not found\",\"notFoundMsg\":[\"There’s nothing here.\",\"How did we get here?\",\"That’s a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"back\":\"Go back\",\"home\":\"Take me home\"},\"navbar\":[\"/\",{\"text\":\"Modules\",\"icon\":\"lightbulb\",\"prefix\":\"/modules/\",\"children\":[{\"text\":\"Voorschrijven\",\"icon\":\"hugeicons:doctor-01\",\"link\":\"voorschrijven/\"},{\"text\":\"Toedienregistratie\",\"icon\":\"hugeicons:tap-07\",\"link\":\"tdr/\"}]},{\"text\":\"MedimoApp\",\"link\":\"/app/\"},{\"text\":\"Admin\",\"link\":\"/admin\"}],\"sidebar\":{\"/app/\":\"structure\",\"/modules/voorschrijven/\":\"structure\",\"/modules/tdr/\":\"structure\",\"/\":[\"\"]}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
