'use strict'
require('../sass/nav.scss')
const React = require('react')
const c = require('classnames')
const { link } = require('../utils')

const navItems = [
  { href: '/', display: 'home' },
  { href: '/about', display: 'about' },
  { href: '/work', display: 'work' }
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
