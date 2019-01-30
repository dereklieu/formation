'use strict'
require('../sass/home.scss')

const React = require('react')
const c = require('classnames')

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isBlur: false
    }
    setTimeout(() => this.setState({ isBlur: true }), 800)
  }

  render () {
    const {imageCredit} = this.props
    return (
      <div className='full noscroll'>
        <div className={c('full spread image-canvas transition-filter', {blur: this.state.isBlur})} />

        <main className='over-spread'>
          <aside className='image-credit'>{imageCredit}</aside>
        </main>

      </div>
    )
  }
}
module.exports = App
