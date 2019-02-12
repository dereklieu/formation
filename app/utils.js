'use strict'
const slugify = require('slugify')

export function link (displayName) {
  return slugify(displayName)
}
