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
