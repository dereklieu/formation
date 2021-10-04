'use strict'
import '../sass/resume.scss'
import React from 'react'
import { Helmet } from 'react-helmet'
import Nav from '../components/nav'
import { link } from '../utils'

class Resume extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Helmet>
          <title>Resume</title>
        </Helmet>
        <Nav />
        <main className='main'>
          <h3 className='main-title bg-dark inline-wrap'>Resume</h3>

          <section className='section section-resume' id='jobs'>
            <h3 className='section-title'>Experience</h3>
            <dl className='resume-detail'>
              <dt><em>May 2019 - now</em></dt>
              <dd><b>Mapbox</b> Senior Software Engineer <em>San Francisco, CA</em></dd>
              <dt><em>January 2014 - May 2019</em></dt>
              <dd><b>Development Seed</b> Senior Software Engineer <em>Washington, DC</em></dd>
              <dt><em>October 2010 - January 2014</em></dt>
              <dd><b>Chronicle of Philanthropy</b> Graphics Journalist <em>Washington, DC</em></dd>
              <dt><em>June - Sept, 2010</em></dt>
              <dd><b>Audrey</b> Web Production Intern <em>Los Angeles, CA</em></dd>
            </dl>
          </section>

          <section className='section section-resume'>
            <h3 className='section-title'>Knowledge</h3>
            <ul className='resume-detail'>
              <li>React, Redux, Typescript</li>
              <li>Jest, Cypress</li>
              <li>AWS, Azure</li>
              <li>Python</li>
            </ul>
          </section>

          <section className='section section-resume'>
            <h3 className='section-title'>Work</h3>
            <dl className='resume-detail'>
              <dt><b><a href={link('/build/mapbox-studio')}>Mapbox Studio</a></b></dt>
              <dd>
                <ul>
                  <li><em>Lead engineer, front-end development</em></li>
                  {/*<li>Led engineering team for map design product with TODO active monthly users.</li>*/}
                  <li>Launched Data Visualization Components.</li>
                  <li>Built deployment workflow and Redux architecture for Style Components.</li>
                  <li>Mentored engineers and supported product designers.</li>
                </ul>
              </dd>

              <dt><b>Mapbox Styles API</b></dt>
              <dd>
                <ul>
                  <li><em>Server-side development</em></li>
                  {/*<li>Developed Express API serving TODO monthly records.</li>*/}
                </ul>
              </dd>

              <dt><b><a href={link('/build/washington-post-election-coverage')}>Washington Post Election Maps</a></b></dt>
              <dd>
                <ul>
                  <li><em>Project lead, front-end development</em></li>
                  <li>Launched compelling real-time coverage to millions of newswatchers on election day.</li>
                  <li>Oversaw development of highly available data pipeline and API.</li>
                  <li>Built reusable, responsive visual components for Washington Post homepage.</li>
                  <li>Leveraged Mapbox GL to render custom projections and real-time data.</li>
                </ul>
              </dd>

              <dt><b>Red Cross GO</b></dt>
              <dd>
                <ul>
                  <li><em>Project lead, full-stack development</em></li>
                  <li>Prototyped a platform to modernize data management practices at the world's largest humanitarian organization.</li>
                  <li>Designed and deployed cloud-native infrastructure architecture on Azure.</li>
                  <li>Conducted extensive in-person user research to tailor front-end functionality.</li>
                </ul>
              </dd>

              <dt><b>Urban Change Explorer</b></dt>
              <dd>
                <ul>
                  <li><em>Project lead, full-stack development</em></li>
                  <li>Created an urban intelligence tool for city planners to track urban change using satellite data.</li>
                  <li>Developed map interface to evaluate change detection outputs against satellite and drone imagery.</li>
                  <li>Built extensible vector tile pipeline capable of fast, incremental processing.</li>
                </ul>
              </dd>

              <dt><b>OpenRoads</b></dt>
              <dd>
                <ul>
                  <li><em>Full-stack development</em></li>
                  <li>Deployed OpenStreetMap-based stack for collaborative road asset management in the Philippines.</li>
                  <li>Built <a href='https://github.com/developmentseed/macrocosm' target='_blank'>Macrocosm</a>, a Node.js port of the OSM API.</li>
                </ul>
              </dd>

              <dt><b>Famine Early Warning Systems Network (FEWSNET)</b></dt>
              <dd>
                <ul>
                  <li><em>Project lead</em></li>
                  <li>Consulted to improve code quality, documentation, and development infrastructure.</li>
                  <li>Implemented continuous integration, end-to-end integration test suite using Cypress.</li>
                </ul>
              </dd>

              <dt><b>Cumulus Dashboard</b></dt>
              <dd>
                <ul>
                  <li><em>Front-end development</em></li>
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
              <dt><strong>Talks</strong></dt>
              <dd>
                <ul>
                  <li>I've spoken at conferences on topics including journalism, open data, and geospatial technology.</li>
                  <li>Before the pandemic, I presented my work on <a href='http://lieu.io/talks/2018-foss4g' target='_blank'>tracking urban change</a> at FOSS4G in Tanzania.</li>
                </ul>
              </dd>

              <dt><strong>Location</strong></dt>
              <dd>I live in San Francisco and I'm open to opportunities here and in Manhattan and Brooklyn.</dd>

              <dt><strong>Education</strong></dt>
              <dd>I did my undergrad at UCLA and majored in something completely unrelated to what I do now.</dd>
            </dl>
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default Resume
