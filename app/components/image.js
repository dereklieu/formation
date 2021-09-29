import React from 'react'
import c from 'classnames'

export default function Image (props) {
  const { alt } = props
  const className = c(props.className, 'img')
  const src = imageUri(props.src)
  return <img src={src} className={className} alt={alt} />
}

export function imageUri (src) {
  return '/' + src
}
