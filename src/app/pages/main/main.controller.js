'use strict';

function MainController($log, $timeout, $auth, ipCookie) {
  'ngInject';

  $auth.submitLogin().then(function (resp) {
    // handle success response
    console.log('handle success response');
    console.log(resp);

    console.log(ipCookie());
  }).catch(function (resp) {
    // handle error response
    console.log('handle error response');
    console.log(resp);
  });

  $timeout(function () {
    $auth.updateAccount({})
      .then(function (resp) {
        // handle success response
      })
      .catch(function (resp) {
        // handle error response
      });
  }, 2000);

  $timeout(function () {
    $.AdminLTE.layout.activate();
  }, 100);

  $log.debug('Hello from main controller!');
}

export default MainController;
