'use strict';

(function() {

  function authInterceptor($rootScope, $q, $cookies, $injector, Util) {
    var state;
    return {
      // Add authorization token to headers
      request(config) {
        config.headers = config.headers || {};
        if (localStorage.getItem('token')) {
          config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError(response) {
        if (response.status === 401) {
          (state || (state = $injector.get('$state')))
          .go('login');
          // remove any stale tokens
          // $cookies.remove('token');
          localStorage.removeItem('token');
        }
        return $q.reject(response);
      }
    };
  }

  angular.module('imeanApp.auth')
    .factory('authInterceptor', authInterceptor);
})();
