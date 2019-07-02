const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
  bail: true,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new HtmlWebpackPlugin({
      title: 'Authors Haven',
      template: './src/index.html',
      path: path.join(__dirname, './dist'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new LodashModuleReplacementPlugin,
    new MiniCssExtractPlugin({
      filename: 'stylesheets/[name].[hash].css', allChunks: true
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],

  mode: 'production'
});
