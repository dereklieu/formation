'use strict'
const React = require('react')
const { Provider } = require('react-redux')
const store = require('../store/store')()

class App extends React.Component {
  render () {
    const {imageCredit} = this.props
    return (
      <Provider store={store}>
        <main className='spread image-canvas'>
          <aside className='image-credit'>{imageCredit}</aside>
        </main>
      </Provider>
    )
  }
}
module.exports = App
