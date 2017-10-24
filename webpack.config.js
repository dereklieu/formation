const path = require('path')
const StaticGeneratorPlugin = require('static-site-generator-webpack-plugin')
const collect = require('./app/collect')

module.exports = createWebpackConfig
async function createWebpackConfig () {
  const content = await collect()
  return {
    entry: {
      main: path.resolve(__dirname, 'app/index.js')
    },

    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build'),
      libraryTarget: 'umd'
    },

    resolve: {
      extensions: ['.js']
    },

    module: {
      rules: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }]
    },

    plugins: [
      new StaticGeneratorPlugin({
        paths: ['/'],
        locals: { content }
      })
    ]
  }
}
