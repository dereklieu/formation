const path = require('path')
const StaticGeneratorPlugin = require('static-site-generator-webpack-plugin')
module.exports = createWebpackConfig
async function createWebpackConfig () {
  return {
    entry: {
      main: path.resolve(__dirname, 'index.js')
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
            presets: ['env']
          }
        }
      }]
    },

    plugins: [
      new StaticGeneratorPlugin({
        paths: ['/'],
        locals: {}
      })
    ]
  }
}
