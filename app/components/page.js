'use strict'
require('../sass/reset.scss')
require('../sass/normalize.scss')
require('../sass/normalize-opentype.scss')
require('../sass/base.scss')

var React = require('react')

function Page ({ body, content, css, js }) {
  const base64ImageString = `data:${content.imageMime};base64,${content.imageBase64}`
  const imageCanvasStyle = `.image-canvas { background-image: url("${base64ImageString}"); }`
  return (
    <html>
      <head>
        <title>Merp</title>
        {css.map((href, i) => <link rel="stylesheet" key={`css-${i}`} href={href}/>)}
        <style dangerouslySetInnerHTML={{__html: imageCanvasStyle}} />
      </head>
      <body>
        <div id='react-root' className='spread' dangerouslySetInnerHTML={{__html: body}}/>
        <script dangerouslySetInnerHTML={{__html: `window.ssr = ${JSON.stringify(content)}`}}/>
        {js.map((src, i) => <script key={`js-${i}`} src={src}/>)}
      </body>
    </html>
  )
}
module.exports = Page
