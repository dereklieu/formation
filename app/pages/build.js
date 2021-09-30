import React from 'react'
import { Helmet } from 'react-helmet'
import c from 'classnames'

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
    case 'image':
      return <Hero src={c.content} caption={c.caption} key={i} size="small" />
  }
}

function Hero ({ src, caption, size }) {
  const figureClass = c({'build-l': size === 'small'})
  return (
    <section className='section'>
      <figure className={figureClass}>
        <Image src={src}/>
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
