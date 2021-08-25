'use strict'

import React from 'react'
import { Helmet } from 'react-helmet'
import Nav from '../components/nav'
import { link } from '../utils'

class About extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Helmet>
          <title>About</title>
        </Helmet>
        <Nav active="about" />
        <main className='main prose'>
          <h3 className='main-title bg-dark inline-wrap'>About</h3>

          <section className='section'>
            <p>I write software for journalists, humanitarian crises mappers and responders, and people doing international development.</p>
          </section>

          <section className='section'>
            <p>I'm currently building a platform to dedupe relief efforts in the wake of a disaster by allowing crises responders to share actionable data and analysis. Situation reports as we know them today are hard to follow, and are out of date before they're published. I'm working with a group called <a target='_blank' href='https://nethope.org/'>NetHope</a> to do this better.</p>
            <p>(If you work with situation reports, I'd love to hear from you. You can also follow the work on <a href='https://github.com/developmentseed/nethope-sitrep-frontend' target='_blank'>Github</a>.)</p>
            <p>In the past few years I've led software projects in partnership with the Washington Post, various departments in the World Bank, and the Federation of Red Cross Societies (IFRC).</p>
            <p>I also build bicycles, <a href='https://twitter.com/dereklieu/' target='_blank'>occasionally tweet</a>, and maintain an <a href='https://github.com/prose/prose/' target='_blank'>open-source editor for Github</a> called <a href='https://prose.io/' target='_blank'>Prose.io</a>.</p>
            <p><a href={link('work')} title='Resume'>You can read more about my work here</a>.</p>
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default About
