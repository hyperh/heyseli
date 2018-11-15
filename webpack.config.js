const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const isProd = process.env.NODE_ENV === 'production';

const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
];
const prodPlugins = [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  new webpack.optimize.UglifyJsPlugin({
    screw_ie8: true,
    compressor: { warnings: false },
  }),
];

/* eslint-disable max-len */
module.exports = {
  devtool: 'eval',
  entry: isProd ?
    './src/index' :
    [
      `webpack-dev-server/client?http://localhost:${process.env.PORT}`,
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './src/index',
    ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '',
  },
  plugins: isProd ? prodPlugins : devPlugins,
  module: {
    preLoaders: [
      {
        test: /\.js/,
        loader: 'eslint',
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.css/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss',
        ],
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'node_modules/react-photoswipe/lib'),
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'resolve-url',
          'sass?sourceMap',
        ],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.(png|jpg|svg|gif)/,
        loaders: [
          'url?limit=10000&hash=sha512&digest=hex&name=public/img/[name]_[hash].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "50-75", speed: 4}}',
        ],
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'node_modules/react-photoswipe/lib'),
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        loader: 'file?name=public/fonts/[name].[ext]',
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.(pdf)/,
        loader: 'file?name=public/papers/[name].[ext]',
        include: path.join(__dirname, 'src'),
      },
    ],
  },
  postcss: () => [autoprefixer],
};