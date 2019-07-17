'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
var app = angular
  .module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $httpProvider.defaults.headers.common['Authorization'] = $.cookie('Tokiuz') ;

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/painel', {
        templateUrl: 'views/painel.html',
        controller: 'PainelCtrl',
        controllerAs: 'painel'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
