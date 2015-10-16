const _ = require('lodash');
const path = require('path');
const baseConfig = require('./webpack.base.config');

module.exports = _.extend({}, baseConfig, {
  entry: path.resolve(__dirname, 'example/app.cjsx'),
  output: {
    path: path.resolve(__dirname, 'example/dist'),
    publicPath: 'example/dist/',
    filename: 'app.js'
  },
  devServer: {
    contentBase: "./example",
    port: 8000
  },
  resolveLoader: {
    modulesDirectories: [
      path.resolve(__dirname, 'node_modules')
    ]
  }
});
