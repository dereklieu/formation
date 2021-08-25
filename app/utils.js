'use strict'
import slugify from 'slugify'
import url from 'url'
import path from 'path'
import { baseUrl } from './config'

export function link (displayName) {
  return url.resolve(baseUrl, path.join(slugify(displayName), 'index.html'))
}

export function random (array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}
