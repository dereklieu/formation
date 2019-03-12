'use strict'
require('../sass/resume.scss')

const React = require('react')
const { Helmet } = require('react-helmet')
const Nav = require('../components/nav')

class Resume extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Nav />
        <Helmet>
          <title>Resume</title>
        </Helmet>
        <main className='main'>
          <section className='prose' id='greetings'>
            <h3 className='main-title bg-dark inline-wrap'>Hello</h3>
          </section>

          <section className='section prose' id='brief'>
            <p>I'm a software engineer, information designer, and product lead, and I develop tools for the web.</p>
            <p>I specialize in writing intuitive interfaces in React, but I've also deployed production backends, designed APIs, and configured infrastructure on AWS and Azure. As a team lead, I've built products through careful user research and design.</p>
            <p>I currently work at <a href='https://developmentseed.org/' target='_blank'>Development Seed</a>.</p>
          </section>

          <section className='section section-resume' id='jobs'>
            <h3 className='section-title'>Jobs</h3>
            <dl className='resume-detail'>
              <dt><em>From January 2014 to present</em></dt>
              <dd>Development Seed <b>Senior Software Engineer/Product Lead</b> <em>Washington, DC</em></dd>
              <dt>From October 2010 to January 2014</dt>
              <dd>Chronicle of Philanthropy <b>Graphics Journalist</b> <em>Washington, DC</em></dd>
              <dt>From June to Sept, 2010</dt>
              <dd>Audrey <b>Web Production Intern</b> <em>Los Angeles, CA</em></dd>
            </dl>
          </section>

          <section className='section section-resume' id='skills'>
            <h3 className='section-title'>Skills</h3>
            <ul className='resume-detail'>
              <li>Technical design leadership</li>
              <li>User research, wireframing, and information design</li>
              <li>Javascript, HTML, CSS, Python, and Bash programming environments</li>
              <li>Web component rendering and MVC libraries e.g. React, Django</li>
              <li>Client-side vector/GIS rendering libraries e.g. D3, MapboxGl</li>
              <li>REST concepts, API design and implementation, Postgres</li>
              <li>Serverless infrastructure concepts and implementation in AWS, Azure</li>
            </ul>
          </section>

          <section className='section section-resume' id='recent-projects'>
            <h3 className='section-title'>Recent Projects</h3>
            <dl className='resume-detail'>
              <dt><b>Washington Post Presidential Elections</b></dt>
              <dd>
                <ul>
                  <li><em>Project lead, front-end build</em></li>
                  <li>Launched dynamic, compelling coverage to millions of newswatchers on election day 2016 with no major hiccups.</li>
                  <li>Oversaw development of data pipeline and API capable of handling enormous traffic spikes.</li>
                  <li>Built reusable, responsive visual components integrated seamlessly into <a href='https://www.washingtonpost.com' target='_blank'>washingtonpost.com</a>.</li>
                  <li>Leveraged and extended MapboxGL.js to render custom projections and real-time data.</li>
                </ul>
              </dd>

              <dt><b>Red Cross GO</b></dt>
              <dd>
                <ul>
                  <li><em>Project lead, infrastructure, front-end/back-end build</em></li>
                  <li>Built platform to modernize data management practices at the world's largest humanitarian organization.</li>
                </ul>
              </dd>
            </dl>
          </section>

          <section className='section section-resume' id='misc'>
            <h3 className='section-title'>Misc</h3>
            <dl className='resume-detail'>
              <dt><strong>Bachelors of Arts, UCLA 2009</strong></dt>
              <dd>My grades were ok</dd>
            </dl>
          </section>
        </main>
      </React.Fragment>
    )
  }
}

module.exports = Resume
