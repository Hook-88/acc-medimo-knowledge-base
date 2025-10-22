export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home","icon":"house"} }],
  ["/app/", { loader: () => import(/* webpackChunkName: "app_index.html" */"/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/app/index.html.js"), meta: {"title":"MedimoApp","icon":"cib:app-store"} }],
  ["/app/install.html", { loader: () => import(/* webpackChunkName: "app_install.html" */"/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/app/install.html.js"), meta: {"title":"App instaleren","icon":"icon-park-solid:play","order":1} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"Toedienregistratie","icon":"hugeicons:tap-07"} }],
  ["/guide/disable.html", { loader: () => import(/* webpackChunkName: "guide_disable.html" */"/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/guide/disable.html.js"), meta: {"title":"Disabling layout and features","icon":"gears","order":4} }],
  ["/guide/encrypt.html", { loader: () => import(/* webpackChunkName: "guide_encrypt.html" */"/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/guide/encrypt.html.js"), meta: {"title":"Encryption Article","icon":"lock"} }],
  ["/guide/layout.html", { loader: () => import(/* webpackChunkName: "guide_layout.html" */"/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/guide/layout.html.js"), meta: {"title":"Layout","icon":"object-group","order":2} }],
  ["/guide/markdown.html", { loader: () => import(/* webpackChunkName: "guide_markdown.html" */"/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/guide/markdown.html.js"), meta: {"title":"Markdown Enhance","icon":"fa6-brands:markdown","order":2} }],
  ["/guide/page.html", { loader: () => import(/* webpackChunkName: "guide_page.html" */"/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/guide/page.html.js"), meta: {"title":"Page Config","icon":"file","order":3} }],
  ["/modules/", { loader: () => import(/* webpackChunkName: "modules_index.html" */"/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/modules/index.html.js"), meta: {"title":"Modules","icon":"lightbulb"} }],
  ["/modules/voorschrijven/", { loader: () => import(/* webpackChunkName: "modules_voorschrijven_index.html" */"/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/modules/voorschrijven/index.html.js"), meta: {"title":"Voorschrijven","icon":"hugeicons:doctor-01"} }],
  ["/modules/voorschrijven/change-dosage.html", { loader: () => import(/* webpackChunkName: "modules_voorschrijven_change-dosage.html" */"/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/modules/voorschrijven/change-dosage.html.js"), meta: {"title":"Medicatie wijzigen","icon":"simple-icons:changedetection","order":2} }],
  ["/modules/voorschrijven/opgeven-dosering-regulier.html", { loader: () => import(/* webpackChunkName: "modules_voorschrijven_opgeven-dosering-regulier.html" */"/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/modules/voorschrijven/opgeven-dosering-regulier.html.js"), meta: {"title":"Opgeven dosering: Regulier"} }],
  ["/modules/voorschrijven/start-new.html", { loader: () => import(/* webpackChunkName: "modules_voorschrijven_start-new.html" */"/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/modules/voorschrijven/start-new.html.js"), meta: {"title":"Medicatie starten","icon":"icon-park-solid:play","order":1} }],
  ["/modules/voorschrijven/stop-medication.html", { loader: () => import(/* webpackChunkName: "modules_voorschrijven_stop-medication.html" */"/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/modules/voorschrijven/stop-medication.html.js"), meta: {"title":"Medicatie stoppen","icon":"game-icons:stop-sign","order":3} }],
  ["/modules/tdr/", { loader: () => import(/* webpackChunkName: "modules_tdr_index.html" */"/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/modules/tdr/index.html.js"), meta: {"title":"Toedienregistratie","icon":"hugeicons:tap-07"} }],
  ["/modules/tdr/disable.html", { loader: () => import(/* webpackChunkName: "modules_tdr_disable.html" */"/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/modules/tdr/disable.html.js"), meta: {"title":"Disabling layout and features","icon":"gears","order":4} }],
  ["/modules/tdr/encrypt.html", { loader: () => import(/* webpackChunkName: "modules_tdr_encrypt.html" */"/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/modules/tdr/encrypt.html.js"), meta: {"title":"Encryption Article","icon":"lock"} }],
  ["/modules/tdr/layout.html", { loader: () => import(/* webpackChunkName: "modules_tdr_layout.html" */"/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/modules/tdr/layout.html.js"), meta: {"title":"Layout","icon":"object-group","order":2} }],
  ["/modules/tdr/markdown.html", { loader: () => import(/* webpackChunkName: "modules_tdr_markdown.html" */"/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/modules/tdr/markdown.html.js"), meta: {"title":"Markdown Enhance","icon":"fa6-brands:markdown","order":2} }],
  ["/modules/tdr/page.html", { loader: () => import(/* webpackChunkName: "modules_tdr_page.html" */"/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/modules/tdr/page.html.js"), meta: {"title":"Page Config","icon":"file","order":3} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
