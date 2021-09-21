'use strict'
import slugify from 'slugify'
import url from 'url'
import path from 'path'
import { baseUrl } from './config'

export function formatPathSection (pathSection) {
  const formatted = pathSection
    .split('/')
    .map(slugify)
    .map(s => s.toLowerCase())
    .join('/')
  return formatted
}

export function link (pathSection) {
  const result = url.resolve(
    baseUrl,
    path.join(formatPathSection(pathSection), 'index.html')
  )
  return result
}

export function random (array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}
