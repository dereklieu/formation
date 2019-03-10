'use strict'
require('../sass/resume.scss')
const React = require('react')

class Resume extends React.Component {
  render () {
    return (
      <div className='resume'>
        <section className='section' id='brief'>
          <p>I'm a software engineer and team lead with a lot of experience building cool stuff.</p>
        </section>

        <section className='section' id='jobs'>
          <div className='resume-split'>
            <h3 className='section-title'>Jobs</h3>
            <dl className='dl resume-dl'>
              <dt>From January 2014 to present</dt>
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
      </div>
    )
  }
}

module.exports = Resume
