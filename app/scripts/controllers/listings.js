'use strict';

/**
 * @ngdoc function
 * @name moviesappApp.controller:ListingsCtrl
 * @description
 * # ListingsCtrl
 * Controller of the moviesappApp
 */
angular.module('moviesappApp')
.controller('ListingsCtrl', function ($scope, $http, $location, moviesService) {
	
	
	$scope.movies = [];

	moviesService.fetchMovies().then(function(){
		$scope.movies = moviesService.getMoviesListings();
	});
	
	$scope.viewDetails = function(movie_id) {
		console.log(movie_id);
		$location.path('/details/'+movie_id);
	}
});
