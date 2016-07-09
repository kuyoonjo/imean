'use strict';

(function (angular, undefined) {
  angular.module("imeanApp.auth")

    .constant("AuthUtils", {
      skipIfLoggedIn: ($q, $state, Auth) => {
        var deferred = $q.defer();

        Auth.isLoggedIn(_.noop).then(is => {
          if (is) {
            console.log('logged in');
            deferred.reject();
          } else {
            deferred.resolve();
          }
        });
        return deferred.promise;
      },

      loginRequired: () => {
        return ($q, $state, Auth) => {
          var deferred = $q.defer();
          if (Auth.isLoggedIn()) {
            deferred.resolve();
          } else {
            $state.go('login');
          }
          return deferred.promise;
        }
      }
    })
})(angular);