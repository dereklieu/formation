'use strict'
import React from 'react'
import { StaticRouter, Route } from 'react-router-dom'
import { paths } from '../constants'
import Home from '../pages/home'
import Builds from '../pages/builds'
import About from '../pages/about'

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
export default App
