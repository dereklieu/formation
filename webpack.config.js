const path = require('path')
const StaticGeneratorPlugin = require('static-site-generator-webpack-plugin')
const collect = require('./app/collect')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
})

module.exports = createWebpackConfig
async function createWebpackConfig () {
  const content = await collect()
  return {
    entry: {
      main: path.resolve(__dirname, 'app/index.js')
    },

    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build/app'),
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
      }, {
        test: /\.scss?$/,
        use: extractSass.extract({
          use: [
            'css-loader',
            'sass-loader'
          ],
          fallback: 'style-loader'
        })
      }]
    },

    plugins: [
      new StaticGeneratorPlugin({
        paths: ['/'],
        locals: { content }
      }),
      extractSass
    ]
  }
}
