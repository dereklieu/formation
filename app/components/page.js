'use strict'
import '../sass/reset.scss'
import '../sass/normalize.scss'
import '../sass/normalize-opentype.scss'
import '../sass/base.scss'

import React from 'react'
require.context('../assets/images')

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
        <meta charSet="utf-8" />
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
export default Page
