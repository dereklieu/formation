const path = require('path')
const StaticGeneratorPlugin = require('static-site-generator-webpack-plugin')
const collect = require('./app/collect')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const dev = process.env.NODE_ENV === 'development'
const mode = dev ? 'development' : 'production'

module.exports = createWebpackConfig
async function createWebpackConfig () {
  const content = await collect()
  return {
    mode,
    entry: {
      main: path.resolve(__dirname, 'app/index.js')
    },

    stats: 'minimal',
    devServer: { stats: 'errors-only' },

    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build/app'),
      libraryTarget: 'umd',
      globalObject: 'this'
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
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }, {
        test: /\.scss?$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: ['./app/sass/utils.scss']
            }
          }
        ]
      }, {
        test: new RegExp(content.imageFile),
        use: {
          loader: 'file-loader',
          options: {
            name: 'canvas.[ext]'
          }
        }
      }]
    },

    plugins: [
      new StaticGeneratorPlugin({
        crawl: true,
        paths: ['/'],
        locals: { content }
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
      })
    ]
  }
}
