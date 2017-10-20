const path = require('path')
const StaticGeneratorPlugin = require('static-site-generator-webpack-plugin')
const collect = require('./collect')

module.exports = createWebpackConfig
async function createWebpackConfig () {
  const content = await collect()
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
      extensions: ['.js', '.jsx']
    },

    module: {
      rules: [{
        test: /\.(js|jsx)?$/,
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
        locals: { content }
      })
    ]
  }
}
