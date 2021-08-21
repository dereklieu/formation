'use strict'
const slugify = require('slugify')
const url = require('url')
const path = require('path')
const { baseUrl } = require('./config')

function link (displayName) {
  return url.resolve(baseUrl, path.join(slugify(displayName), 'index.html'))
}

function random (array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

module.exports = { link, random }
