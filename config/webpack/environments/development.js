'use strict';

// 依赖模块
var webpack = require('webpack');

// 开发环境配置
var development = function (_path) {

  var config = {
    context: _path,
    debug: true,
    devtool: 'cheap-source-map',
    output: {
      publicPath: 'http://127.0.0.1:8080/'
    },
    devServer: {
      contentBase: './dist',
      info: true,
      hot: true,
      inline: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  };

  return config;
};

module.exports = development;
