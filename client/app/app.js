'use strict';

angular.module('imeanApp', ['imeanApp.auth', 'imeanApp.admin', 'imeanApp.constants', 'ngCookies',
    'ngResource', 'ngSanitize', 'btford.socket-io', 'ui.router', 'ui.bootstrap',
    'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    // $locationProvider.html5Mode(true);
  });
