'use strict'
import React from 'react'
import { Helmet } from 'react-helmet'

import '../sass/builds.scss'

import Nav from '../components/nav'
import { imageUri } from '../components/image'
import { builds } from '../builds'
import { link } from '../utils'

function renderBuild(build, i) {
  const { title, description, card } = build
  return (
    <div className='build' key={title + i}>
      <div
        className='build-image'
        style={{ backgroundImage: `url(${imageUri(card)})`}}
      />
      <div className='build-description prose'>
        <h4 className='build-title'>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

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
              {builds.map(renderBuild)}
            </div>
          </section>
        </main>
      </>
    )
  }
}

export default Builds
