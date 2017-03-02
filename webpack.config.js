const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './scripts/index.jsx',
  output: {
    path: __dirname + '/public',
    filename: './bundle.js'
  },
  devServer: {
    port: 8080,
    contentBase: './public'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [{
        test: /.js[x]?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
          test: /\.css$/,
          loader:  'style-loader!css-loader'
      }]
  }
}
