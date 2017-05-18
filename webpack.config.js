'use strict';

const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'bin')
  },
  module: {
    loaders: [{
      test: '/\.js$/',
      exclude: '/node_modules/',
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new Dotenv({
      path: './.env'
    })
  ]
};
