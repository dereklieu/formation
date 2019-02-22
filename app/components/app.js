'use strict'
const React = require('react')
const { StaticRouter, Route } = require('react-router-dom')

const { Provider } = require('react-redux')
const store = require('../store')()
const Home = require('./home')

class App extends React.Component {
  render () {
    const { path } = this.props
    const router = (
      <StaticRouter location={path} context={{}}>
        <Provider store={store}>
          <Route exact path='/'
            render={(props) => <Home {...props} {...this.props} />}
          />
        </Provider>
      </StaticRouter>
    )
    return router
  }
}
module.exports = App
