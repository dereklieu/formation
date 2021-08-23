'use strict'
require('../sass/nav.scss')
const React = require('react')
const c = require('classnames')
const { link } = require('../utils')
const { paths } = require('../constants')

const navItems = [
  { href: paths.home, display: 'home' },
  { href: paths.about, display: 'about' },
  { href: paths.builds, display: 'builds' }
]

function Nav ({ active }) {
  return (
    <nav className='header-nav'>
      <ul className='header-nav-items'>
        {navItems.map(item => (
          <li key={item.href}>
            <a
              href={link(item.href)}
              className={c(
                'header-nav-item bg-dark inline-wrap',
                { active: active === item.display }
              )}
            >
              {item.display}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

module.exports = Nav
