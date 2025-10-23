
import { DocSearch, injectDocSearchConfig } from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/node_modules/@vuepress/plugin-docsearch/lib/client/index.js"
import '/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/node_modules/@docsearch/css/dist/style.css'
import '/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/node_modules/@vuepress/plugin-docsearch/lib/client/styles/docsearch.css'
import '/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/node_modules/@vuepress/plugin-docsearch/lib/client/styles/vars.css'

export default {
  enhance({ app }) {
    injectDocSearchConfig(app)
    app.component('SearchBox', DocSearch)
  },
}
