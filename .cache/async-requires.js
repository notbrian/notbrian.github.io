// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("/Users/brian/Documents/Coding/notbrian.github.io/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/brian/Documents/Coding/notbrian.github.io/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("/Users/brian/Documents/Coding/notbrian.github.io/src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/brian/Documents/Coding/notbrian.github.io/.cache/data.json")

