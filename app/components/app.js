'use strict'
const React = require('react')
const { StaticRouter, Route } = require('react-router-dom')

const { Provider } = require('react-redux')
const store = require('../store')()

const Home = require('../pages/home')
const Work = require('../pages/work')

class App extends React.Component {
  render () {
    const { path } = this.props
    const router = (
      <StaticRouter location={path} context={{}}>
        <Provider store={store}>
          <Route exact path='/'
            render={(props) => <Home {...props} {...this.props} />}
          />
          <Route exact path='/work' component={Work} />
        </Provider>
      </StaticRouter>
    )
    return router
  }
}
module.exports = App
