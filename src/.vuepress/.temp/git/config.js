import { GitContributors } from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
  },
};
