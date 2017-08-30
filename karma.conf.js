var webpack = require('webpack');
var PhantomJS = require('PhantomJS');

module.exports = function(config) {
  config.set({
    // browsers: ['PhantomJS'],
    files: [ 'tests/**/*.test.js' ],
    frameworks: ['mocha'],
    preprocessors: {
      'webpack.test.js': ['webpack'],
    },
    reporters: ['dots'],
    singleRun: true,
    webpack: {
      module: {
        loaders: [
          { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
        ],
      },
      watch: true,
    },
    webpackServer: {
      noInfo: true,
    },
  });
};