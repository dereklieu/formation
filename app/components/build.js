import React, { useState } from 'react'
import { imageUri } from '../components/image'
import c from 'classnames'

export default function Build (props) {
  const [ isHover, setHover ] = useState(false)
  const { title, description, card, banner } = props
  const container = c({
    'build-l': banner,
    'build-m': !banner,
    'hover': isHover
  })
  return (
    <div
      className={container}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className='build-image'
        style={{ backgroundImage: `url(${imageUri(card)})`}}
      />
      <div className='build-description prose'>
        <h4 className='build-title transition'>{title}</h4>
        <p className='transition'>{description}</p>
      </div>
    </div>
  )
}
