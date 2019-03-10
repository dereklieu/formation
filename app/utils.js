'use strict'
const slugify = require('slugify')
const url = require('url')
const { baseUrl } = require('./config')

export function link (displayName) {
  return url.resolve(baseUrl, slugify(displayName))
}
