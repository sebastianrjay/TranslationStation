'use strict';

angular.module('translationStation.bing-results', [])

.controller('BingResultsCtrl', function($http, $rootScope, $scope) {
	$scope.translatedText = "";

	$scope.$on('translate', function(event) {

		if($rootScope.fromLanguageBingAbbrv && $rootScope.toLanguageBingAbbrv) {
			var queryString = '/api/bing/translate/?from=' + $rootScope.fromLanguageBingAbbrv +
			'&to=' + $rootScope.toLanguageBingAbbrv + '&text=' + $rootScope.translationInput;

			$http.get(queryString)
				.success(function(data, status, headers, config) {
					$scope.translatedText = data;
				})
				.error(function(data, status, headers, config) {
					$scope.translatedText = 'Error ' + status + ': ' + data.error;
				});
		} else {
			$scope.translatedText = 'Bing translation is unavailable for the chosen languages.';
		}
	});
});
