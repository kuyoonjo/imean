'use strict';

angular.module('imeanApp.auth', ['imeanApp.constants', 'imeanApp.util', 'ngCookies', 'ui.router'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
