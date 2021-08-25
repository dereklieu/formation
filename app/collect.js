const images = require('./assets/registry')

function random (array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function collect () {
  const image = random(images)
  return {
    imageCredit: image.credit,
    imageFile: image.file
  }
}

module.exports = collect
