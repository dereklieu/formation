const React = require('react')
const { render } = require('react-dom')
const App = require('./components/app')
module.exports = function () {
  const content = window.ssr.content
  render(React.createElement(App, content), document.getElementById('react-root'))
}
