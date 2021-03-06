const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    renderer: path.resolve(__dirname, '../renderer.js')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      'react-native': 'react-native-web'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)|(jsx)$/,
        exclude: [path.resolve(__dirname, '../node_modules')],
        loader: 'babel-loader'
      },
      {
        test: /\.(jpe?g)|(png)|(gif)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)]
}
