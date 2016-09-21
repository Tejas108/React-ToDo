var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: "http://localhost:8080/dist/",
    filename: "index_bundle.js"
  },
  scripts: {
    production: "webpack -p"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [HTMLWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()],
  devServer: {
    hot: true,
    contentBase: './',
    proxy: [
      {
        path: /./,
        target: "http://tasker"
      }
    ]
  },
};
