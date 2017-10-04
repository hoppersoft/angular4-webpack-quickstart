var config = require('./webpack.config'),
    webpack = require('webpack');

config.output.filename = 'js/bundle.min.js',
config.output.sourceMapFilename = "js/bundle.min.js.map",
config.plugins = config.plugins || [];
config.plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));

module.exports = config;