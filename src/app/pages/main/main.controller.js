'use strict';

function MainController($log, $timeout) {
  'ngInject';

  $timeout(function () {
    $.AdminLTE.layout.activate();
  }, 100);

  $log.debug('Hello from main controller!');
}

export default MainController;
