require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build/js');
var LIB_DIR = path.resolve(__dirname, 'lib');

var config = {
  entry: LIB_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'simply-react.js'
  },
  module : {
    loaders : [
      { test : /\.js?/, include : LIB_DIR, loader : 'babel-loader' }
    ]
  }
};

module.exports = config;
