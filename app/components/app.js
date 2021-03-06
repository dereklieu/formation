'use strict'
const React = require('react')
const { StaticRouter, Route } = require('react-router-dom')

const { Provider } = require('react-redux')
const store = require('../store')()

const Home = require('../pages/home')
const Work = require('../pages/work')
const About = require('../pages/about')

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
          <Route exact path='/about' component={About} />
        </Provider>
      </StaticRouter>
    )
    return router
  }
}
module.exports = App
