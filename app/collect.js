const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')
const mime = require('mime')

async function collect () {
  const registryPath = path.join(__dirname, 'assets/registry.yaml')
  try {
    var registry = yaml.safeLoad(fs.readFileSync(registryPath))
  } catch (e) {
    throw new Error(e)
  }
  const { images } = registry
  const image = images[Math.floor(Math.random() * images.length)]
  const imagePath = path.join(__dirname, 'assets/images', image.file)

  return {
    imageCredit: image.credit,
    imageBase64: new Buffer(fs.readFileSync(imagePath)).toString('base64'),
    imageMime: mime.getType(path.extname(image.file))
  }
}
module.exports = collect
