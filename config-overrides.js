const path = require('path')
const webpack = require('webpack')

module.exports = function override(config, env) {
  config.output = {
    pathinfo: false,
    path: path.join(__dirname, 'build'),

    filename: '[name].js',
    chunkFilename: '[name].js',

    // publicPath is set to '' so that we don't make requests to file:///
    publicPath: ''
  }

  // This forces webpack to output all code in one bundle
  config.optimization.splitChunks = false
  config.plugins.push(new webpack.optimize.LimitChunkCountPlugin({
    maxChunks: 1
  }))

  return config
}
