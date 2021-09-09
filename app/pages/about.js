'use strict'

import React from 'react'
import { Helmet } from 'react-helmet'
import Nav from '../components/nav'
import { random, link } from '../utils'

import me from '../assets/images/me-grinding.jpg';

const words = [
  'tomfoolery',
  'labyrinth',
  'facetious',
  'superfluous',
  'petrichor',
  'hullabaloo',
  'dirigible',
  'colloquialism',
  'kerfuffle',
  'mellifluous',
  'smorgosbord',
  'shenanigans'
];

const email = random(words);

class About extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Helmet>
          <title>About me</title>
        </Helmet>
        <Nav active='about' />
        <main className='main prose'>
          <h3 className='main-title bg-dark inline-wrap'>About</h3>

          <section className='section'>
            <p>I'm Derek. Sparks fear me. I fear losing fingers.</p>
            <img src={`/${me}`} alt='Derek grinding down some iron' className='section-img' />
          </section>

          <section className='section'>
            <p>I spend my employed hours making <a target='_blank' href='https://studio.mapbox.com/'>Mapbox Studio</a>, a design tool for building maps both beautiful and <a target='_blank' href='https://api.mapbox.com/styles/v1/jenn-chow/ckox7mfhb1a6p17pdlt8dt0tt.html?title=view&access_token=pk.eyJ1IjoiamVubi1jaG93IiwiYSI6ImNrbTJmYWtxbjBoaTcyb3BpMGZ0ZWxiZnAifQ.5T5q9-qJR5AD51ZwLJzGlA#9.77/38.9717/-77.0395/0/75'>ugly</a>. In the past, I've led software projects in partnership with the Washington Post, World Bank, and the Red Cross.</p>
            <p>I grew up in a mysterious place called San Jose. Someday, maybe, I hope to move to Brooklyn and eat doubles.</p>
            <p>Email me at <a href={`mailto:${email}@dereklieu.com`}>{email}@dereklieu.com</a>. You can also find me on <a target='_blank' href='https://twitter.com/dereklieu'>twitter</a> and <a target='_blank' href='https://github.com/dereklieu'>github</a>.</p>
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default About
