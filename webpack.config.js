var path = require('path');
var htmlPlugin = require('html-webpack-plugin');

const htmlConfig = new htmlPlugin({
  template: './src/index.html',
  favicon: './src/favicon.ico',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {

  entry: "./src/index.js",


  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(css|less)$/, use: ['style-loader', 'css-loader', 'less-loader'], exclude: /node_modules/ },
      { test: /\.(jpe?g|png|gif|svg|ttf|ico)$/, use: 'file-loader', exclude: /node_modules/ }
    ]
  },

  plugins: [ htmlConfig ]


};