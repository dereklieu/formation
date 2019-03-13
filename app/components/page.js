'use strict'
require('../sass/reset.scss')
require('../sass/normalize.scss')
require('../sass/normalize-opentype.scss')
require('../sass/base.scss')
require.context('../assets/images')

const React = require('react')

const imageCanvasStyle = `
  .image-canvas {
    background: url("canvas.jpg") no-repeat center center fixed;
    background-size: cover
  }
`

function Page ({ body, content, css, js }) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="I'm an engineer and product lead, and I live in San Francisco." />
        <title>Derek Lieu</title>
        {css.map((href, i) => <link rel="stylesheet" key={`css-${i}`} href={'/' + href}/>)}
        <style dangerouslySetInnerHTML={{ __html: imageCanvasStyle }} />
      </head>
      <body>
        <div id='react-root' dangerouslySetInnerHTML={{ __html: body }}/>
        <script dangerouslySetInnerHTML={{ __html: `window.ssr = ${JSON.stringify(content)}` }}/>
        {js.map((src, i) => <script key={`js-${i}`} src={'/' + src}/>)}
      </body>
    </html>
  )
}
module.exports = Page
