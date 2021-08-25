import React from 'react'
import { hydrate } from 'react-dom'
import App from './components/app'

export default function () {
  const content = window.ssr
  hydrate(React.createElement(App, content), document.getElementById('react-root'))
};
