import CodeDemo from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
