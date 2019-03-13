'use strict'
require('../sass/home.scss')
require('../sass/nav.scss')

const c = require('classnames')
const React = require('react')
const { Helmet } = require('react-helmet')
const nextTick = require('next-tick')
const { link } = require('../utils')

const navItems = [
  'work'
]

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isBlur: false
    }
  }

  componentDidMount () {
    const storage = !!(window && window.localStorage)
    const duration = storage && localStorage.getItem('initialBlur') !== 'true' ? 800 : 5
    setTimeout(() => nextTick(() => this.setState({ isBlur: true })), duration)
    storage && localStorage.setItem('initialBlur', 'true')
  }

  navItem (displayName) {
    return <li key={displayName} className='nav-row'>
      <a className='bg-light nav-item nav-item-hover' href={link(displayName)} title={`Visit ${displayName}`}>{displayName}</a>
    </li>
  }

  navWord (displayName, i) {
    return <span key={i} className='bg-dark nav-item nav-word'>{displayName}</span>
  }

  render () {
    const { imageCredit, greeting } = this.props
    return (
      <React.Fragment>
        <Helmet>
          <title>Derek Lieu</title>
        </Helmet>
        <div className='home full noscroll'>
          <div className={c('spread image-canvas transition-filter', { blur: this.state.isBlur })} />

          <main className='over-spread'>
            <nav className='nav-wrapper'>
              <div className={c('nav-items transition-filter', { blur: !this.state.isBlur })}>
                <span className='clearfix nav-row'>{greeting.split(' ').map(this.navWord)}</span>
                <ul>
                  {navItems.map(this.navItem)}
                </ul>
              </div>
            </nav>

            <aside className='image-credit-wrapper'>
              <p className='bg-dark image-credit'>{imageCredit}</p>
            </aside>
          </main>

        </div>
      </React.Fragment>
    )
  }
}
module.exports = App
