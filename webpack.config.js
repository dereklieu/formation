const path = require('path')
const StaticGeneratorPlugin = require('static-site-generator-webpack-plugin')
const collect = require('./app/collect')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const dev = process.env.NODE_ENV === 'development'

module.exports = createWebpackConfig
async function createWebpackConfig () {
  const content = await collect()
  return {
    entry: {
      main: path.resolve(__dirname, 'app/index.js')
    },

    stats: { warnings: false },
    devServer: { stats: { warnings: false } },

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
          dev ? 'style-loader' : {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          'css-loader',
          'sass-loader'
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
        paths: ['/'],
        locals: { content }
      }),
      new MiniCssExtractPlugin({
        filename: dev ? '[name].css' : '[name].[contenthash].css'
      })
    ]
  }
}
