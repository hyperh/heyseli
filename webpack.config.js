const path = require('path');

/* eslint-disable max-len */
module.exports = {
  mode: 'development',
  devtool: 'eval',
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          'postcss-loader'
        ],
        include: [path.join(__dirname, 'src')]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(png|jpg|svg|gif)/,
        use: [
          {
            loader: 'url',
            options: {
              limit: 10000,
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
