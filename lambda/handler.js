const fs = require('fs')
const path = require('path')
const AWS = require('aws-sdk')
const mime = require('mime')
const promisify = require('es6-promisify')
const zlib = require('zlib')
const gzip = promisify(zlib.gzip)

const s3 = new AWS.S3()
const cloudfront = new AWS.CloudFront()

module.exports = function handler (event, context, callback) {
  run()
  .then(result => callback(null, result))
  .catch(err => callback(err))
}

function run () {
  const files = fs.readdirSync(path.join(__dirname, 'app'))
  return Promise.all(files.map(upload))
  .then(invalidate)
}

async function upload (filename) {
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

async function invalidate () {
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
