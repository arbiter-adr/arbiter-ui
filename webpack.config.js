var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './src/index.js',
  output: { path: __dirname, filename: 'arbiter-ui.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      }, {
        test : /.json?$/,
        loader : "json-loader"
      }
    ],
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"'
      })
    ]
  }
};
