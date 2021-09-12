'use strict'
import '../sass/home.scss'
import '../sass/nav.scss'
import '../sass/blink.scss'
import c from 'classnames'
import React from 'react'
import { Helmet } from 'react-helmet'
import { link, random } from '../utils'
import { paths } from '../constants'
import { Hello } from '../components/hello'
import { greetings } from '../assets/greeting.yaml'

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
        <div className='full noscroll'>
          <div className={c('spread image-canvas transition-filter', { blur: this.state.isBlur })} />

          <main className='over-spread'>
            <nav className='home-content'>
              <div className={c('greetings transition-filter', { blur: !this.state.isBlur })}>
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

export default App

function Goodbye () {
  return (
    <ul>
      <li className='greeting-row'>
        <a
          className='bg-light greeting transition'
          href={link(paths.about)}
          title="See what this is about"
        >
          Goodbye
        </a>
      </li>
    </ul>
  )
}
