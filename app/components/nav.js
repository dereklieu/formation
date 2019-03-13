'use strict'
require('../sass/nav.scss')
const React = require('react')
const { link } = require('../utils')
function Nav ({ match }) {
  return (
    <nav className='header-nav'>
      <ul className='header-nav-items'>
        <li><a href={link('/')} className='header-nav-item bg-dark inline-wrap'>home</a></li>
      </ul>
    </nav>
  )
}
module.exports = Nav
