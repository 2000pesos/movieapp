'use strict';

/**
 * @ngdoc function
 * @name moviesappApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the moviesappApp
 */
angular.module('moviesappApp')
.controller('DetailsCtrl', function ($scope, $http, $routeParams, $location, moviesService) {

	var movieId = $routeParams.movieId;
	$scope.current_movie;

	moviesService.fetchSingleMovie(movieId).then(function(){
		$scope.current_movie = moviesService.getCurrentMovie();
		$scope.current_movie.release_date_year = moment($scope.current_movie.release_date).format("YYYY");
	});
	$scope.backToListings = function() {
		$location.path('/listings');
	}
});
