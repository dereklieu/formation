import React from 'react'
import { Helmet } from 'react-helmet'

import Image from '../components/image'
import Nav from '../components/nav'

export default function Build (props) {
  const {
    title,
    content = []
  } = props
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Nav/>
      <main className='main wmax960'>
        <h3 className='main-title bg-dark inline-wrap'>{title}</h3>
        {content.map(renderContents)}
      </main>
    </>
  )
}

function renderContents (c, i) {
  switch (c.type) {
    case 'hero':
      return <Hero src={c.content} caption={c.caption} key={i} />
      break
    case 'prose':
      return <Prose content={c.content} key={i} />
      break
  }
}

function Hero ({ src, caption }) {
  return (
    <section className='section'>
      <figure>
        <Image
          className=''
          src={src}
        />
        {Boolean(caption) && (
          <figcaption>{caption}</figcaption>
        )}
      </figure>
    </section>
  )
}

function Prose ({ content }) {
  return (
    <section className='section prose'>
      {content}
    </section>
  )
}
