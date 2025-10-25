import { hasGlobalComponent } from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";
import VidStack from "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/node_modules/vuepress-plugin-components/lib/client/components/VidStack.js";

import "/Users/paulushoekjan/repos/vue-press/medimo-kb-theme-hope/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    if(!hasGlobalComponent("VidStack")) app.component("VidStack", VidStack);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
