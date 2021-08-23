'use strict'
const React = require('react')
const { StaticRouter, Route } = require('react-router-dom')

const { paths } = require('../constants')
const Home = require('../pages/home')
const Builds = require('../pages/builds')
const About = require('../pages/about')

class App extends React.Component {
  render () {
    const { path } = this.props
    const router = (
      <StaticRouter location={path}>
        <Route exact path={paths.home}
          render={(props) => <Home {...props} {...this.props} />}
        />
        <Route exact path={paths.builds} component={Builds} />
        <Route exact path={paths.about} component={About} />
      </StaticRouter>
    )
    return router
  }
}
module.exports = App
