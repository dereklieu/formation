'use strict'
require('../sass/home.scss')
require('../sass/nav.scss')
require('../sass/blink.scss')

const c = require('classnames')
const React = require('react')
const { Helmet } = require('react-helmet')
const { link, random } = require('../utils')
const { paths } = require('../constants')
const { Hello } = require('../components/hello')

const { greetings } = require('../assets/greeting.yaml')

const getUnused = (lastUsed) => {
  // If everything has been used once, reset the used list,
  // but ensure we don't randomly choose the same entry twice.
  // This assumes the list has length of at least 2
  const used = lastUsed.length >= greetings.length
    ? [ lastUsed[lastUsed.length - 1] ]
    : lastUsed
  const unused = greetings.filter(greeting =>
    used.indexOf(greeting) === -1
  )

  const greeting = random(unused)
  return {
    greeting,
    used: used.concat(greeting)
  }
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isBlur: false,
      greeting: '',
      used: []
    }
  }

  componentDidMount () {
    const storage = !!(window && window.localStorage)
    const duration = storage && localStorage.getItem('initialBlur') !== 'true' ? 800 : 5
    setTimeout(() => this.setState({ isBlur: true }), duration)
    storage && localStorage.setItem('initialBlur', 'true')
    this.updateGreeting()
  }

  updateGreeting = () => {
    this.setState({ ...getUnused(this.state.used) })
  }

  render () {
    const { imageCredit } = this.props
    const { greeting } = this.state
    return (
      <React.Fragment>
        <Helmet>
          <title>Derek says hello</title>
        </Helmet>
        <div className='home full noscroll'>
          <div className={c('spread image-canvas transition-filter', { blur: this.state.isBlur })} />

          <main className='over-spread'>
            <nav className='nav-wrapper'>
              <div className={c('nav-items transition-filter', { blur: !this.state.isBlur })}>
                <Hello
                  greeting={greeting.trim()}
                  updateGreeting={this.updateGreeting}
                />
                <Goodbye />
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

function Goodbye () {
  return (
    <ul>
      <li className='nav-row'>
        <a
          className='bg-light nav-item nav-item-hover'
          href={link(paths.about)}
          title="See what this is about"
        >
          Goodbye
        </a>
      </li>
    </ul>
  )
}
