'use strict'
require('../sass/resume.scss')

const React = require('react')
const { Helmet } = require('react-helmet')

class Resume extends React.Component {
  render () {
    return (
      <main className='main'>
        <Helmet>
          <title>Resume</title>
        </Helmet>
        <section className='section prose' id='greetings'>
          <h3 className='main-title bg-dark inline-wrap'>Hello</h3>
        </section>

        <section className='section prose' id='brief'>
          <p>I'm a software engineer, information designer, and product lead, and I develop tools for the web.</p>
          <p>I specialize in writing intuitive interfaces in React, but I've also deployed production backends, designed APIs, and configured infrastructure on AWS and Azure. As a team lead, I've built products through careful user research and design.</p>
          <p>I currently work at <a href='https://developmentseed.org/' target='_blank'>Development Seed</a>.</p>
        </section>

        <section className='section' id='jobs'>
          <div className='resume-split'>
            <h3 className='section-title'>Jobs</h3>
            <dl className='dl resume-dl'>
              <dt><em>From January 2014 to present</em></dt>
              <dd>Development Seed <b>Senior Software Engineer/Product Lead</b> <em>Washington, DC</em></dd>
              <dt>From October 2010 to January 2014</dt>
              <dd>Chronicle of Philanthropy <b>Graphics Journalist</b> <em>Washington, DC</em></dd>
              <dt>From June to Sept, 2010</dt>
              <dd>Audrey <b>Web Production Intern</b> <em>Los Angeles, CA</em></dd>
            </dl>
            <h3 className='section-title'>Work</h3>
            <dl className='dl resume-dl'>
              <dt><em>From January 2014 to present</em></dt>
              <dd>Development Seed <b>Senior Software Engineer/Product Lead</b> <em>Washington, DC</em></dd>
              <dt>From October 2010 to January 2014</dt>
              <dd>Chronicle of Philanthropy <b>Graphics Journalist</b> <em>Washington, DC</em></dd>
              <dt>From June to Sept, 2010</dt>
              <dd>Audrey <b>Web Production Intern</b> <em>Los Angeles, CA</em></dd>
            </dl>
          </div>
        </section>

        <section className='section' id='work'>
        </section>
      </main>
    )
  }
}

module.exports = Resume
