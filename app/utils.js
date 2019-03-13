'use strict'
const slugify = require('slugify')
const url = require('url')
const path = require('path')
const { baseUrl } = require('./config')

export function link (displayName) {
  return url.resolve(baseUrl, path.join(slugify(displayName), 'index.html'))
}
