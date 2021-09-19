'use strict'
import React from 'react'
import { Helmet } from 'react-helmet'

import '../sass/builds.scss'

import Nav from '../components/nav'
import Build from'../components/build'
import { builds } from '../builds'

class Builds extends React.Component {
  render () {
    return (
      <>
        <Nav active='builds' />
        <Helmet>
          <title>Builds</title>
        </Helmet>
        <main className='main'>
          <h3 className='main-title bg-dark inline-wrap'>Builds</h3>
          <section className='section'>
            <div className='builds'>
              {builds.map(build =>
                <Build key={build.title} {...build} />
              )}
            </div>
          </section>
        </main>
      </>
    )
  }
}

export default Builds
