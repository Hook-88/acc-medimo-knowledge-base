export const themeData = JSON.parse("{\"encrypt\":{\"config\":{\"/demo/encrypt.html\":{\"tokens\":[\"$2b$10$BRdDgZkJLx0jvRNuknIfK.7Hn4vJHkp3n8fpKs96LFnWHypvLrvzu\"],\"hint\":\"Password: 1234\"}}},\"author\":{\"name\":\"Hook88 b.v.\",\"url\":\"https://google.com\"},\"logo\":\"/assets/image/enovation-medimo-logo.webp\",\"docsDir\":\"src\",\"contributors\":false,\"displayFooter\":true,\"pageInfo\":[\"ReadingTime\",\"Original\",\"Category\",\"Tag\"],\"locales\":{\"/\":{\"lang\":\"nl-NL\",\"navbarLocales\":{\"langName\":\"Dutch\",\"selectLangAriaLabel\":\"Selecteer taal\"},\"metaLocales\":{\"author\":\"Auteur\",\"date\":\"Geschreven Datum\",\"origin\":\"Bron\",\"views\":\"Pagina views\",\"category\":\"Categorie\",\"tag\":\"Tag\",\"readingTime\":\"Leestijd\",\"words\":\"Woorden\",\"toc\":\"Op Deze Pagina\",\"prev\":\"Vorige\",\"next\":\"Volgende\",\"contributors\":\"Bijdragers\",\"editLink\":\"Bewerk deze pagina\",\"print\":\"Printen\"},\"outlookLocales\":{\"themeColor\":\"Themakleur\",\"darkmode\":\"Thema modus\",\"fullscreen\":\"Full Screen\"},\"encryptLocales\":{\"iconLabel\":\"Pagina Geëncrypteerd\",\"placeholder\":\"Voeg paswoord in\",\"remember\":\"Herinner paswoord\",\"errorHint\":\"Geliebe het juiste paswoord in te vullen!\"},\"routerLocales\":{\"skipToContent\":\"Ga naar de hoofdinhoud\",\"notFoundTitle\":\"Pagina niet gevonden\",\"notFoundMsg\":[\"Er is niets hier.\",\"Hoe zijn we hier beland?\",\"Dat is een 404.\",\"Zo te zien hebben we enkele kapotte links.\"],\"back\":\"Ga terug\",\"home\":\"Ga terug naar home\"},\"navbar\":[\"/\",{\"text\":\"Modules\",\"icon\":\"lightbulb\",\"prefix\":\"/modules/\",\"children\":[{\"text\":\"Voorschrijven\",\"icon\":\"hugeicons:doctor-01\",\"link\":\"voorschrijven/\"},{\"text\":\"Toedienregistratie\",\"icon\":\"hugeicons:tap-07\",\"link\":\"tdr/\"}]},{\"text\":\"MedimoApp\",\"link\":\"/app/\"},{\"text\":\"Admin\",\"link\":\"https://acc-medimo-kb.netlify.app/admin\"}],\"sidebar\":{\"/app/\":\"structure\",\"/modules/voorschrijven/\":\"structure\",\"/modules/tdr/\":\"structure\",\"/\":[\"\"]}}}}")

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
