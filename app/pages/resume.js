'use strict'
import '../sass/resume.scss'
import React from 'react'
import { Helmet } from 'react-helmet'
import Nav from '../components/nav'

class Resume extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Nav />
        <Helmet>
          <title>Resume</title>
        </Helmet>
        <main className='main'>
          <section className='prose wmax480'>
            <h3 className='main-title bg-dark inline-wrap'>Resume</h3>
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
              <li>Client-side vector/GIS rendering libraries e.g. D3, Mapbox GL</li>
              <li>REST concepts, API design and implementation, Postgres</li>
              <li>Serverless infrastructure concepts and implementation in AWS, Azure</li>
            </ul>
          </section>

          <section className='section section-resume' id='recent-projects'>
            <h3 className='section-title'>Recent Work</h3>
            <dl className='resume-detail'>
              <dt><b>Washington Post Presidential Elections</b></dt>
              <dd>
                <ul>
                  <li><em>Project lead, front-end build</em></li>
                  <li>Launched dynamic, compelling coverage to millions of newswatchers on election day 2016.</li>
                  <li>Oversaw development of data pipeline and API capable of handling enormous traffic spikes.</li>
                  <li>Built reusable, responsive visual components integrated seamlessly into <a href='https://www.washingtonpost.com' target='_blank'>washingtonpost.com</a>.</li>
                  <li>Leveraged and extended Mapbox GL JS to render custom projections and real-time data.</li>
                </ul>
              </dd>

              <dt><b>Red Cross GO</b></dt>
              <dd>
                <ul>
                  <li><em>Project lead, infrastructure, front-end/back-end build</em></li>
                  <li>Launched platform to modernize data management practices at the largest humanitarian organization.</li>
                  <li>Designed and deployed cloud-native infrastructure architecture on Microsoft Azure.</li>
                  <li>Conducted extensive in-person user research to tailor front-end functionality.</li>
                </ul>
              </dd>

              <dt><b>Urban Change Explorer</b></dt>
              <dd>
                <ul>
                  <li><em>Project lead, infrastructure, front-end build</em></li>
                  <li>Created an urban intelligence tool for city planners to track urban change using satellite data.</li>
                  <li>Developed map interface to evaluate change detection outputs against satellite and drone imagery.</li>
                  <li>Built extensible <a href='https://github.com/mapbox/tippecanoe' target='_blank'>tippecanoe</a>-based vector tile pipeline capable of fast, incremental processing.</li>
                </ul>
              </dd>

              <dt><b>OpenRoads</b></dt>
              <dd>
                <ul>
                  <li><em>Front-end/back-end build</em></li>
                  <li>Deployed OpenStreetMap (OSM) stack for collaborative road asset management in the Philippines.</li>
                  <li>Built and released <a href='https://github.com/developmentseed/macrocosm' target='_blank'>Macrocosm</a>, a Node.js port of the OSM Rails API v0.6.</li>
                </ul>
              </dd>

              <dt><b>Famine Early Warning Systems Network (FEWSNET)</b></dt>
              <dd>
                <ul>
                  <li><em>Project lead</em></li>
                  <li>Consulted to improve code quality, documentation, and development infrastructure.</li>
                  <li>Implemented continuous integration, end-to-end integration test suite using <a href='https://www.cypress.io/' target='_blank'>cypress</a>.</li>
                </ul>
              </dd>

              <dt><b>Cumulus Dashboard</b></dt>
              <dd>
                <ul>
                  <li><em>Front-end build</em></li>
                  <li>Built the front-end interface to a cloud-native satellite imagery pipeline for NASA.</li>
                </ul>
              </dd>

              <dt><b>Obama Whitehouse Tweets</b></dt>
              <dd>
                <ul>
                  <li>Rendered a <a href='http://lieu.io/whitehouse-tweet-topics/' target='_blank'>k-means clustering of Obama tweets</a> at the invitation of the White House press office.</li>
                </ul>
              </dd>
            </dl>
          </section>

          <section className='section section-resume' id='misc'>
            <h3 className='section-title'>Misc.</h3>
            <dl className='resume-detail'>
              <dt><strong>Public Appearances</strong></dt>
              <dd>
                <ul>
                  <li>I've spoken at a number of conferences, mostly relating to journalism, open data, and geospatial technology.</li>
                  <li>Most recently, I presented my work on <a href='http://lieu.io/talks/2018-foss4g' target='_blank'>tracking urban change</a> at FOSS4G in Tanzania.</li>
                </ul>
              </dd>

              <dt><strong>Lifestyle Choices</strong></dt>
              <dd>I live and work in San Francisco, CA.</dd>

              <dt><strong>Education</strong></dt>
              <dd>I obtained a Bachelor's of Arts from UCLA in 2009. My grades were ok.</dd>
            </dl>
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default Resume
