'use strict'

const React = require('react')
const { Helmet } = require('react-helmet')
const Nav = require('../components/nav')
const { link } = require('../utils')

class Work extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Helmet>
          <title>Work</title>
        </Helmet>
        <Nav />
        <main className='main prose'>
          <h3 className='main-title bg-dark inline-wrap'>Good Work</h3>

          <section className='section'>
            <p>I write software for journalists, humanitarian crises mappers and responders, and people doing international development.</p>
            <p>The best part of my job is getting to meet face to face with someone in one of these fields, and learning enough so as not to make some terrible design choice that would hinder or otherwise completely wreck every aspect of their important, live-saving, democracy-affirming work.</p>
          </section>

          <section className='section'>
            <p>I'm currently building a platform to dedupe relief efforts in the wake of a disaster by allowing crises responders to share actionable data and analysis. Situation reports as we know them today are hard to follow, and are out of date before they're published. I'm working with a group called <a target='_blank' href='https://nethope.org/'>NetHope</a> to do this better.</p>
            <p>(If you work with situation reports, I'd love to hear from you. You can also follow the work on <a href='https://github.com/developmentseed/nethope-sitrep-frontend' target='_blank'>Github</a>.)</p>
            <p>In the past few years I've led software projects in partnership with the Washington Post, various departments in the World Bank, and the Federation of Red Cross Societies (IFRC). You can find my resume <a href={link('resume')} title='Resume'>here</a>.</p>
          </section>
        </main>
      </React.Fragment>
    )
  }
}

module.exports = Work
