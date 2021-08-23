const React = require('react')
const { renderToString, renderToStaticMarkup } = require('react-dom/server')
const App = require('./components/app')
const Page = require('./components/page')
const { paths } = require('./constants')

module.exports = function ssr ({ webpackStats, content, path }) {
  const assets = Object.keys(webpackStats.compilation.assets)
  const js = assets.filter(a => a.match(/\.js$/))
  const css = assets.filter(a => a.match(/\.css$/))
  content.path = path
  const body = renderToString(React.createElement(App, content))
  const pageProps = {
    js,
    css,
    body,
    content
  }

  // The homepage background image and greetings are bundled inline.
  // Other pages don't need this.
  if (path !== paths.home) {
    pageProps.content = { path }
  }

  const html = `
    <!doctype html>
    ${renderToStaticMarkup(React.createElement(Page, pageProps))}
  `
  return html
}
