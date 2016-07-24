'use strict';

// 依赖模块
var CleanWebpackPlugin = require('clean-webpack-plugin');

// 生产环境配置
var production = function (_path) {

  var config = {
    context: _path,
    debug: false,
    devtool: 'cheap-source-map',
    output: {
      publicPath: 'http://127.0.0.1:8080/',
      filename: '[name].[chunkhash].js'
    },
    plugins: [
      new CleanWebpackPlugin(['dist'], {
        root: _path,
        verbose: true,
        dry: false
      })
    ]
  };

  return config;
};

module.exports = production;
