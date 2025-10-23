export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"nl-NL\",\"title\":\"Medimo kennisbank\",\"description\":\"Kennisbank van Medimo.\",\"head\":[[\"meta\",{\"name\":\"algolia-site-verification\",\"content\":\"2A12CAC6C57275C7\"}],[\"script\",{\"src\":\"https://identity.netlify.com/v1/netlify-identity-widget.js\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
