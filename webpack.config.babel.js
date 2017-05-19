'use strict';

var webpack = require('webpack');
var path = require('path');
var Dotenv = require('dotenv-webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var glob = require('glob');

module.exports = function() {
  return {
    entry: './src/index.js',
    output: {
      filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'bin')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.html$/,
          use: 'html-loader'
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader' },
              { 
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                  includePaths: glob.sync(
                    path.join(__dirname, '**/node_modules/@material')
                  ).map(function(dir) { return path.dirname(dir) })
                }
              }
            ]
          })
        },
        {

        }
      ]
    },
    plugins: [
      new Dotenv({
        path: './.env'
      }),
      new HTMLWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html')
      }),
      new ExtractTextPlugin('styles.css'),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function(module) {
          return module.context && module.context.indexOf('node_modules') !== -1;
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest'
      })
    ]
  }
};
