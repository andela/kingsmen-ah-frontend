const merge = require('webpack-merge');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
  devtool: 'inline-source-map',

  node: {
    fs: "empty"
  },

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    watchOptions: {
      ignored: /node_modules/
    },
    host: 'localhost',
    port: 8000,
    proxy: {
      '/api/v1/*': {
        target: 'http://localhost:3000/',
        secure: false,
        changeOrigin: true,
      },
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Authors Haven',
      template: './src/index.html'
    }),

    new webpack.HotModuleReplacementPlugin({}),
    new Dotenv({
      path: './.env'
    }),
  ],

  mode: 'development'
});
