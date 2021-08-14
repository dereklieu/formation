'use strict'
require('../sass/home.scss')
require('../sass/nav.scss')

const c = require('classnames')
const React = require('react')
const { Helmet } = require('react-helmet')
const nextTick = require('next-tick')
const { link, random } = require('../utils')

const navItems = [
  'about'
]

const getUnused = (list, used) => {
  if (used.length >= list.length) {
    const next = random(list);
    return { next, used: new Set([next]) }
  } else {
    const pool = list.filter(word => !used.has(word));
    const next = random(pool);
    return {
      next,
      used: new Set([...used.add(next)])
    };
  }
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isBlur: false,
      ...getUnused(props.greetings, new Set())
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
    const { imageCredit } = this.props
    const { next } = this.state;
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
                <span className='clearfix nav-row'>
                  {this.navWord('Hello,')}
                  {next.split(' ').map(this.navWord)}
                </span>
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
