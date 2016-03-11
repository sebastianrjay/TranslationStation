'use strict';

angular.module('translationStation.bing-results', ['translationStation.translation-api-util'])

.controller('BingResultsCtrl', function(translationAPIUtil, $http, $rootScope, $scope) {

	$scope.$on('resetTranslatedText', function(event) {
		translationAPIUtil.resetTranslatedText($scope);
	});

	$scope.$on('translate', function(event) {
		translationAPIUtil.translate('bing', $rootScope.fromLanguageBingAbbrv,
			$rootScope.toLanguageBingAbbrv, $rootScope.translationInput, $scope);
	});
});
