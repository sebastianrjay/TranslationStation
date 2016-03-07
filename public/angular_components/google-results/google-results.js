'use strict';

angular.module('translationStation.google-results', [])

.controller('GoogleResultsCtrl', function($http, $rootScope, $scope) {
	$scope.translatedText = "";

	$scope.$on('translate', function(event) {

		if($rootScope.fromLanguageGoogleAbbrv && $rootScope.toLanguageGoogleAbbrv) {
			// var queryString = '/api/bing/translate/?from=' + $rootScope.fromLanguageBingAbbrv +
			// '&to=' + $rootScope.toLanguageBingAbbrv + '&text=' + $rootScope.translationInput;

			// Write new queryString to get Google results fetched by the Node backend

			$http.get(queryString)
				.success(function(data, status, headers, config) {
					$scope.translatedText = data;
				})
				.error(function(data, status, headers, config) {
					$scope.translatedText = 'Error ' + status + ': ' + data.error;
				});
		} else {
			$scope.translatedText = 'Google translation is unavailable for the chosen languages.';
		}
	});
});
