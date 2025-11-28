import { sidebar } from "vuepress-theme-hope"

// export default sidebar({
//   "/": [
//     "",
//     // "portfolio",
//     {
//       text: "Voorschrijven",
//       icon: "laptop-code",
//       prefix: "demo/",
//       link: "demo/",
//       children: "structure",
//     },
//     {
//       text: "Docs",
//       icon: "book",
//       prefix: "guide/",
//       children: "structure",
//     },
//     {
//       text: "Slides",
//       icon: "person-chalkboard",
//       link: "https://ecosystem.vuejs.press/plugins/markdown/revealjs/demo.html",
//     },
//   ],
// })

export default sidebar({
  "/app/": "structure",
  "/modules/voorschrijven/": "structure",
  "/modules/tdr/": "structure",
  "/aan-de-slag/": "structure",

  "/": [""],
})
