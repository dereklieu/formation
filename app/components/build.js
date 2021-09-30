import React, { useState } from 'react'
import c from 'classnames'
import { imageUri } from '../components/image'
import { link } from '../utils'

export default function Build (props) {
  const [ isHover, setHover ] = useState(false)
  const { title, description, card, banner } = props
  const container = c('pointer', {
    'build-l': banner,
    'build-m': !banner,
    'hover': isHover
  })
  const href = props.external || link(`/build/${title}`)
  const linkProps = { href }
  if (props.external) linkProps.target = '_blank'
  return (
    <div
      className={container}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a {...linkProps}>
        <div
          className='build-image transition'
          style={{ backgroundImage: `url(${imageUri(card)})`}}
        />
        <div className='build-description prose'>
          <h4 className='build-title transition'>{title}</h4>
          <p className='transition'>{description}</p>
        </div>
      </a>
    </div>
  )
}
