'use strict';

var path = require('path');
var _ = require('lodash');

var _configs = {

  // 全局配置
  global: require(path.join(__dirname, 'config/webpack/global.js')),

  // 生产环境配置
  production: require(path.join(__dirname, 'config/webpack/environments/production.js')),
  // 开发环境配置
  development: require(path.join(__dirname, 'config/webpack/environments/development.js'))
};

var _load = function () {

  var ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'production';

  console.log('当前环境：', ENV);
  console.log('');

  // 根据当前环境生成配置
  return _configs && _.merge(_configs.global(__dirname), _configs[ENV](__dirname));
};

module.exports = _load();
