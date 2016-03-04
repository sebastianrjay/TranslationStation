'use strict';

angular.module('translationStation.bing-results', [])

.controller('BingResultsCtrl', function($http, $rootScope, $scope) {
	$scope.translatedText = "";
	$scope.translate = function() {
		debugger
		var queryString = '/api/bing/translate/?from=' + $rootScope.fromLanguageBingAbbrv +
		'&to=' + $rootScope.toLanguageBingAbbrv + '&text=' + $rootScope.translationInput;
		$http.get(queryString)
			.success(function(data, status, headers, config) {
				debugger
				$scope.translatedText = data;
			})
			.error(function(stuff) {
				console.log('ERROR');
				[].slice.call(data, status, headers, config).forEach(function(arg) {
					$scope.translatedText = status + ' ' + data.error;
					console.log('New error argument:');
					console.log(arg);
				});
			});
	}
});
