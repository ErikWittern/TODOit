'use strict'

var path = require('path')
var webpack = require('webpack')
var PROD = JSON.parse(process.env.PROD_ENV || '0')

module.exports = {
  entry: path.resolve(__dirname, '.', 'todoit.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'todoit-min.js'
  },
  module: {
    loaders: [
      // Babel:
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ] : []
}
