'use strict';

(function() {

  function UserResource($resource, appConfig) {
    return $resource(appConfig.apiRoot + '/api/users/:id/:controller', {
      id: '@_id'
    }, {
      changePassword: {
        method: 'PUT',
        params: {
          controller: 'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id: 'me'
        }
      }
    });
  }

  angular.module('imeanApp.auth')
    .factory('User', UserResource);
})();
