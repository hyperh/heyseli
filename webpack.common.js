const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

/* eslint-disable max-len */
module.exports = {
  devtool: 'eval',
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: ''
  },
  plugins: [new CleanWebpackPlugin(['dist'])],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(png|jpg|svg|gif)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1250,
              hash: 'sha512',
              digest: 'hex',
              name: 'public/img/[name]_[hash].[ext]'
            }
          },
          { loader: 'image-webpack-loader' }
        ],
        include: [path.join(__dirname, 'src')]
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        use: {
          loader: 'file-loader',
          options: { name: 'public/fonts/[name].[ext]' }
        },
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(pdf)/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'public/papers/[name].[ext]'
          }
        },
        include: path.join(__dirname, 'src')
      }
    ]
  }
};
