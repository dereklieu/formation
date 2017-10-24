'use strict'
const React = require('react')
class App extends React.Component {
  render () {
    const {imageCredit} = this.props
    return (
      <main className='spread image-canvas'>
        <aside className='image-credit'>{imageCredit}</aside>
      </main>
    )
  }
}
module.exports = App
