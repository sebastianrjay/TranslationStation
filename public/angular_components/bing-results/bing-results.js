'use strict';

angular.module('translationStation.bing-results', ['translationStation.translation-api-util'])

.controller('BingResultsCtrl', function(translationAPIUtil, $http, $rootScope, $scope) {
	$scope.translatedText = "";

	$scope.$on('translate', function(event) {
		translationAPIUtil.translate('bing', $rootScope.fromLanguageBingAbbrv,
			$rootScope.toLanguageBingAbbrv, $rootScope.translationInput, $scope);
	});
});
