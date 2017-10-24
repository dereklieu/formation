const React = require('react')
const { hydrate } = require('react-dom')
const App = require('./components/app')
module.exports = function () {
  const content = window.ssr.content
  hydrate(React.createElement(App, content), document.getElementById('react-root'))
}
