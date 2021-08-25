'use strict'
import '../sass/nav.scss'
import React from 'react'
import c from 'classnames'
import { link } from '../utils'
import { paths } from '../constants'

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

export default Nav
