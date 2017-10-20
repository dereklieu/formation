var React = require('react')
function Page ({ body, ssr, js }) {
  return (
    <html>
      <head>
        <title>Hello</title>
      </head>
      <body>
        <div id='react-root' dangerouslySetInnerHTML={{__html: body}}/>
        <script dangerouslySetInnerHTML={{__html: `window.ssr = ${JSON.stringify(ssr)}`}} />
        {js.map(src => <script src={src} />)}
      </body>
    </html>
  )
}
module.exports = Page
