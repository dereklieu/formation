'use strict'
const env = process.env.NODE_ENV
module.exports.baseUrl = env === 'development' ? '/' : 'https://dereklieu.com'
