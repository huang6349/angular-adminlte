'use strict';

function config($logProvider, $authProvider, SYSTEM_CONFIG) {
  'ngInject';

  // 授权配置
  $authProvider.configure({
    apiUrl: `/${SYSTEM_CONFIG.api_url}`,
    tokenValidationPath: '/auth/ic/validate_token',
    emailSignInPath: '/auth/ic/sign_in',
    accountUpdatePath: '/auth/ic/test',
    forceValidateToken: false
  });

  // 开启日志
  $logProvider.debugEnabled(true);
}

export default config;
