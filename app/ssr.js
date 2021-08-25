import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import App from './components/app'
import Page from './components/page'
import { paths } from './constants'

export default function ssr ({ webpackStats, content, path }) {
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

  // The homepage background image is bundled inline.
  // Other pages don't need this.
  if (path !== paths.home) {
    pageProps.content = { path }
  }

  const html = `
    <!doctype html>
    ${renderToStaticMarkup(React.createElement(Page, pageProps))}
  `
  return html
};
