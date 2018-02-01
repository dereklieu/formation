const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')
const mime = require('mime')

// Loads an image registry and randomly selects an image from it.
// Returns the image path and credit.
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
    imageFile: image.file
  }
}
module.exports = collect
