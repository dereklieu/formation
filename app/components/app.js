'use strict'
require('../sass/home.scss')

const c = require('classnames')
const React = require('react')
const { Provider } = require('react-redux')
const store = require('../store/store')()

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
      <Provider store={store}>
        <div className='full noscroll'>
          <div className={c('full spread image-canvas transition-filter', {blur: this.state.isBlur})} />

          <main className='over-spread'>
            <aside className='image-credit'>{imageCredit}</aside>
          </main>

        </div>
      </Provider>
    )
  }
}
module.exports = App
