import { navbar } from "vuepress-theme-hope"

export default navbar([
  "/",
  {
    text: "Modules",
    icon: "lightbulb",
    prefix: "/modules/",
    children: [
      {
        text: "Voorschrijven",
        icon: "hugeicons:doctor-01",
        link: "voorschrijven/",
      },
      {
        text: "Toedienregistratie",
        icon: "hugeicons:tap-07",
        link: "tdr/",
      },
    ],
  },
  {
    text: "MedimoApp",
    link: "/app/",
  },
  {
    text: "Admin",
    link: "/admin/",
  },

  //   {
  //     text: "Guide",
  //     icon: "lightbulb",
  //     prefix: "/guide/",
  //     children: [
  //       {
  //         text: "Bar",
  //         icon: "lightbulb",
  //         prefix: "bar/",
  //         children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
  //       },
  //       {
  //         text: "Foo",
  //         icon: "lightbulb",
  //         prefix: "foo/",
  //         children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
  //       },
  //     ],
  //   },
  //   {
  //     text: "V2 Docs",
  //     icon: "book",
  //     link: "https://theme-hope.vuejs.press/",
  //   },
])
