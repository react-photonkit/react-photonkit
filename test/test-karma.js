'use strict';

const Server = require('karma').Server;
const server = new Server({
  browsers: ['Chrome'],
  singleRun: true,
  frameworks: ['mocha'],
  files: ['./test/*.jsx'],
  preprocessors: { './test/*.jsx': ['webpack', 'sourcemap'] },
  reporters: ['dots'],
  webpack: {
    devtool: 'inline-source-map',
    module: {
      loaders: [{
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.js?/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }]
    }
  },
  webpackServer: {
    noInfo: true
  }
});

server.start();
