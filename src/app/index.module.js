'use strict';

import * as components from './index.components';
import config from './index.config';
import run from './index.run';

const App = angular.module('angular-adminlte', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngMessages',
  'ngAria',
  'ui.router',
  'ui.bootstrap',
  'oc.lazyLoad',

  // 核心
  require("./core/core.module").name,

  // 组件
  require("./index.components").name,

  // 路由
  require("./index.routes").name,

  // 界面
  require("./pages/main/main.module").name
]);

App.config(config);

App.run(run);

export default App;
