const _ = require('lodash');
const path = require('path');
const baseConfig = require('./webpack.base.config');

module.exports = _.extend({}, baseConfig, {
  entry: path.resolve(__dirname, 'src/photon.coffee'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'photon.js',
    library: 'ReactPhotonKit',
    libraryTarget: 'umd'
  }
});
