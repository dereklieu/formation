'use strict'
import React from 'react'
import { StaticRouter, Route } from 'react-router-dom'
import { paths } from '../constants'
import Home from '../pages/home'
import Builds from '../pages/builds'
import Build from '../pages/build'
import About from '../pages/about'

import { formatPathSection } from '../utils'
import { builds } from '../builds'

class App extends React.Component {
  render () {
    const { path } = this.props

    const localBuilds = builds.filter(b => !b.external).map(build => (
      <Route
        exact
        key={build.title}
        path={formatPathSection(`/build/${build.title}`)}
        render={(props) => <Build {...props} title={build.title} content={build.content} />}
      />
    ))

    const router = (
      <StaticRouter location={path}>
        <Route exact path={paths.home}
          render={(props) => <Home {...props} {...this.props} />}
        />
        <Route exact path={paths.builds} component={Builds} />
        <Route exact path={paths.about} component={About} />
        {localBuilds}
      </StaticRouter>
    )
    return router
  }
}
export default App
