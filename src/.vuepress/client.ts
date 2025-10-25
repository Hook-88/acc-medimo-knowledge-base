import { defineClientConfig } from "vuepress/client"
import Layout from "./layouts/Layout.vue"
import VimeoPlayer from "./components/VimeoPlayer.vue"

export default defineClientConfig({
  layouts: {
    Layout,
  },

  enhance({ app }) {
    app.component("VimeoPlayer", VimeoPlayer)
  },
})
