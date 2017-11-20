'use strict';

/**
 * @ngdoc service
 * @name moviesappApp.moviesService
 * @description
 * # moviesService
 * Service in the moviesappApp.
 */
angular.module('moviesappApp')
.service('moviesService', function ($http, $q) {
	
	var api_key = 'REPLACE WITH API KEY!';
	var moviesFetched = false;
	var moviesArray = [];
	var current_movie;

	var fetchMovies = function() {
		if(!moviesFetched) {
			return $http({
				url: 'http://api.themoviedb.org/3/movie/popular?api_key='+api_key
			}).then(function(data){
				moviesFetched = true;
				setMovies(data.data.results);
			});
		}
		else {
			return $q.resolve(true);
		}
	};
	var setMovies = function(movies_data) {
		angular.forEach(movies_data, function(value, index){
            moviesArray.push(value);
        });
	}
	var getMoviesListings = function(){
		return moviesArray;
	}
	var fetchSingleMovie = function(movieId) {
		var single_movie_endpoint = 'https://api.themoviedb.org/3/movie/'+movieId+'?api_key='+api_key;

		return $http({
			url: single_movie_endpoint
		}).then(function(data){
			console.log('single', data);
			setSingleMovie(data);
		});
	}
	var setSingleMovie = function(data) {
		current_movie = data.data;
        console.log('current_movie', current_movie);
	}
	var getCurrentMovie = function(){
		return current_movie;
	}
	return {
		fetchMovies : fetchMovies,
		setMovies : setMovies,
		fetchSingleMovie : fetchSingleMovie,
		setSingleMovie: setSingleMovie,
		getCurrentMovie: getCurrentMovie,
		getMoviesListings: getMoviesListings
	};
});
