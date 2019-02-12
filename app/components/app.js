'use strict'
require('../sass/home.scss')
require('../sass/nav.scss')

const c = require('classnames')
const React = require('react')
const { Provider } = require('react-redux')
const store = require('../store/store')()
const { link } = require('../utils')

const navItems = [
  'work',
  'resume'
]

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isBlur: false
    }
    setTimeout(() => this.setState({ isBlur: true }), 800)
  }

  navItem (displayName) {
    return <li key={displayName}>
      <a className='bg-light nav-item nav-item-hover' href={link(displayName)} title={`Visit ${displayName}`}>{displayName}</a>
    </li>
  }

  render () {
    const {imageCredit} = this.props
    return (
      <Provider store={store}>
        <div className='full noscroll'>
          <div className={c('spread image-canvas transition-filter', {blur: this.state.isBlur})} />

          <main className='over-spread'>
            <nav className='nav-wrapper'>
              <div className={c('nav-items transition-filter', {blur: !this.state.isBlur})}>
                <span className='bg-dark nav-item'>Hello, hi, whatever</span>
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
      </Provider>
    )
  }
}
module.exports = App
