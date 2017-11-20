'use strict';

/**
 * @ngdoc overview
 * @name moviesappApp
 * @description
 * # moviesappApp
 *
 * Main module of the application.
 */
angular
  .module('moviesappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/listings', {
        templateUrl: 'views/listings.html',
        controller: 'ListingsCtrl',
        controllerAs: 'listings'
      })
      .when('/details/:movieId', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl',
        controllerAs: 'details'
      })
      .otherwise({
        redirectTo: '/listings'
      });
  });
