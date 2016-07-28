'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
  module: {
    preLoaders: [{
      test: /\.js?/,
      exclude: /node_modules/,
      loader: 'xo-loader'
    }],
    loaders: [{
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.js?/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=1000000&mimetype=application/font-woff"
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
    }]
  },
  entry: path.resolve(__dirname, 'src/photon.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'photon.js',
    library: 'ReactPhotonKit',
    libraryTarget: 'umd'
  },
  externals: [
    'react',
    'react-dom'
  ],
  xo: {
    extends: ["xo", "xo-react"],
    rules: {
      "quote-props": ["error", "as-needed"]
    }
  }
};
