const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')

function random (array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// Loads an image registry and randomly selects an image from it.
// Returns the image path and credit.
async function collect () {
  const assetsPath = path.join(__dirname, 'assets/')
  try {
    var registry = yaml.safeLoad(fs.readFileSync(path.join(assetsPath, 'registry.yaml')))
  } catch (e) {
    throw new Error(e)
  }
  const image = random(registry.images)

  try {
    var greetings = yaml.safeLoad(fs.readFileSync(path.join(assetsPath, 'greeting.yaml')))
  } catch (e) {
    throw new Error(e)
  }
  const greeting = random(greetings.greetings)

  return {
    imageCredit: image.credit,
    imageFile: image.file,
    greeting
  }
}
module.exports = collect
