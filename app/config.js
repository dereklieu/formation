'use strict'
const env = process.env.NODE_ENV
export const baseUrl = env === 'development' ? '/' : 'https://dereklieu.com'
