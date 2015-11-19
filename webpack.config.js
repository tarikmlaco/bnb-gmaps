var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');

process.env.BABEL_ENV = TARGET;

var common = {
  entry: APP_PATH,
  resolve: {
  	extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: APP_PATH
      },
      {
      	test: /\.jsx?$/,
      	loaders: ['babel'],
      	include: APP_PATH
      },
      { 
        test: /\.js$/,
        loader: 'exports-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
      test: /\.woff$/,
      loader: 'url?limit=100000'
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'MopPlaces, Soon To Be'
    })
  ]
};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      headers: { "Access-Control-Allow-Origin": "*" }
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
