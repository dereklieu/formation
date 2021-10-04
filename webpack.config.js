const path = require('path')
const StaticGeneratorPlugin = require('static-site-generator-webpack-plugin')
const collect = require('./app/collect')
const { paths } = require('./app/constants')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const dev = process.env.NODE_ENV === 'development'
const mode = dev ? 'development' : 'production'

module.exports = createWebpackConfig
async function createWebpackConfig () {
  const content = collect()
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
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread']
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
      }, {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: [
          path.resolve(__dirname, 'app/assets/covers')
        ],
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            outputPath: 'images'
          }
        }
      }, {
        test: /\.ya?ml$/,
        type: 'json',
        use: {
          loader: 'yaml-loader'
        }
      }]
    },

    plugins: [
      new StaticGeneratorPlugin({
        paths: Object.values(paths).concat(
          '/resume',
          '/build/mapbox-studio',
          '/build/a-miata',
          '/build/washington-post-election-coverage'
        ),
        locals: { content }
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
      })
    ]
  }
}
