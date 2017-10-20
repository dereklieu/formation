const React = require('react')
const { renderToString, renderToStaticMarkup } = require('react-dom/server')
const App = require('./components/App.jsx')
const Page = require('./components/Page.jsx')

module.exports = function ssr ({ webpackStats, content }) {
  const assets = Object.keys(webpackStats.compilation.assets)
  const js = assets.filter(a => a.match(/\.js$/))
  const body = renderToString(React.createElement(App, content))
  const pageProps = {
    js,
    body,
    ssr: {
      content
    }
  }
  const html = `
    <!doctype html>
    ${renderToStaticMarkup(React.createElement(Page, pageProps))}
  `
  return html
}
