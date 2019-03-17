// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": () => import("/Users/vinkrish/Documents/my-personal-blog/node_modules/gatsby-plugin-offline/app-shell.js" /* webpackChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js" */),
  "component---src-templates-blog-post-js": () => import("/Users/vinkrish/Documents/my-personal-blog/src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-pages-404-js": () => import("/Users/vinkrish/Documents/my-personal-blog/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-blogs-js": () => import("/Users/vinkrish/Documents/my-personal-blog/src/pages/blogs.js" /* webpackChunkName: "component---src-pages-blogs-js" */),
  "component---src-pages-index-js": () => import("/Users/vinkrish/Documents/my-personal-blog/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/vinkrish/Documents/my-personal-blog/.cache/data.json")

