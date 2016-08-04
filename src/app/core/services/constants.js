'use strict';

export default function (app) {

  app.constant('ROUTE_ERRORS', {
    auth: 'Authorization has been denied.',
  });

  app.constant('SYSTEM_CONFIG', {
    api_url: 'api'
  });
}
