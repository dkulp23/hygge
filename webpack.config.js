'use strict';

const path = require('path');
const Dotenv = require('dotenv-webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'bin')
  },
  module: {
    loaders: [
      {
        test: '/\.js$/',
        exclude: '/node_modules/',
        loader: 'babel-loader'
      },
      {
        test: '/\.html$/',
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: './.env'
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html')
    })
  ]
};
