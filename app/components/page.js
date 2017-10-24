var React = require('react')
function Page ({ body, ssr, js }) {
  const base64ImageString = `data:${ssr.content.imageMime};base64,${ssr.content.imageBase64}`
  const imageCanvasStyle = `.image-canvas { background-image: url("${base64ImageString}"); }`
  return (
    <html>
      <head>
        <title>Hello</title>
        <style dangerouslySetInnerHTML={{__html: imageCanvasStyle}} />
      </head>
      <body>
        <div id='react-root' className='spread' dangerouslySetInnerHTML={{__html: body}}/>
        <script dangerouslySetInnerHTML={{__html: `window.ssr = ${JSON.stringify(ssr)}`}} />
        {js.map(src => <script src={src} />)}
      </body>
    </html>
  )
}
module.exports = Page
