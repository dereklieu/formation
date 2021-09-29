'use strict'
import '../sass/nav.scss'
import React from 'react'
import c from 'classnames'
import { link } from '../utils'
import { paths } from '../constants'

const navItems = [
  { href: paths.home, display: 'Home' },
  { href: paths.about, display: 'About' },
  { href: paths.builds, display: 'Builds' }
]

function Nav ({ active }) {
  return (
    <nav className='nav'>
      <ul className='nav-items'>
        {navItems.map(item => (
          <li key={item.href}>
            <a
              href={link(item.href)}
              className={c(
                'nav-item transition bg-dark inline-wrap',
                { active: active && active.toLowerCase() === item.display.toLowerCase() }
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
