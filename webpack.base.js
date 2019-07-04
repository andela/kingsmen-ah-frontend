const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'index_bundle.js',
    path: path.join(__dirname, './dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      '@actions': path.resolve(__dirname, './src/actions/*'),
      '@components': path.resolve(__dirname, './src/components/*'),
      '@config': path.resolve(__dirname, './src/config/*'),
      '@helpers': path.resolve(__dirname, './src/helpers/*'),
      '@reducers': path.resolve(__dirname, './src/reducers/*'),
      '@utils': path.resolve(__dirname, './src/utils/*'),
      '@validations': path.resolve(__dirname, './src/validations/*'),
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          options: {
            eslintPath: require.resolve('eslint'),
          },
          loader: 'eslint-loader'
        }]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css|scss|sass)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader',
      }
    ]
  },
};
