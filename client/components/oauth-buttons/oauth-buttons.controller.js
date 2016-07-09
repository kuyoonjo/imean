'use strict';

angular.module('imeanApp')
  .controller('OauthButtonsCtrl', function ($timeout, $window, appConfig) {
    this.loginOauth = function (provider) {
      //$window.location.href = '/auth/' + provider;
      if (typeof String.prototype.startsWith != 'function') {
        String.prototype.startsWith = function (str) {
          return this.indexOf(str) == 0;
        };
      }

      const providerUrl = appConfig.apiRoot + '/auth/' + provider;

      if (window.cordova) {
        const ref = cordova.InAppBrowser.open(providerUrl, '_blank');
        ref.addEventListener('loadstart', e => { 
          const url = e.url;
          if (url && url.startsWith(appConfig.apiRoot + '/auth/token/')) {
            let token = url.split('/auth/token/')[1];
            ref.close();
            localStorage.setItem('token', token);
            $window.location.reload();
          }
        });
      } else {
        const ref = $window.open(providerUrl);
        const interval = 500;
        let timer = $timeout(function retriveToken() {
          const url = ref.location.href;
          if (url && url.startsWith(appConfig.apiRoot + '/auth/token/')) {
            let token = url.split('/auth/token/')[1];
            ref.close();
            localStorage.setItem('token', token);
            $window.location.reload();
          }
          timer = $timeout(retriveToken, interval);
        }, interval);
      }
    };
  });
