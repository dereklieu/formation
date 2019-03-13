const fs = require('fs')
const path = require('path')
const AWS = require('aws-sdk')
const mime = require('mime')
const promisify = require('es6-promisify')
const zlib = require('zlib')
const gzip = promisify(zlib.gzip)

const s3 = new AWS.S3()
const cloudfront = new AWS.CloudFront()

module.exports.default = function handler (event, context, callback) {
  run()
  .then(result => callback(null, result))
  .catch(err => callback(err))
}

function run () {
  const files = readdir('app')
  return Promise.all(files.map(upload))
  .then(invalidate)
}

function upload (filename) {
  const absolutePath = path.join(__dirname, 'app', filename)
  const ext = path.extname(filename)
  const expiresIn = ext === '.html' ? 900 : 7200
  const file = fs.readFileSync(absolutePath)
  return gzip(file).then(contents => {
    const params = {
      Bucket: process.env.S3_BUCKET,
      ACL: 'public-read',
      Key: filename,
      ContentType: `${mime.getType(ext)};charset=utf-8`,
      ContentEncoding: 'gzip',
      CacheControl: `max-age=${expiresIn}`,
      Body: contents
    }
    return s3.putObject(params).promise()
  })
}

function invalidate () {
  const params = {
    DistributionId: process.env.CF_DISTRIBUTION,
    InvalidationBatch: {
      CallerReference: `${+(new Date())}`,
      Paths: {
        Quantity: 1,
        Items: ['/*']
      }
    }
  }
  return cloudfront.createInvalidation(params).promise()
}

function readdir (dir) {
  const contents = fs.readdirSync(path.join(__dirname, dir))
  return contents.reduce((acc, curr) => {
    let fileOrDirectory = path.join(dir, curr)
    let stats = fs.lstatSync(path.join(__dirname, fileOrDirectory))
    if (stats.isFile()) {
      return acc.concat([curr])
    } else if (stats.isDirectory()) {
      return acc.concat(readdir(fileOrDirectory).map(file => path.join(curr, file)))
    }
    return null
  }, []).filter(Boolean)
}
