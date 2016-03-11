'use strict';

angular.module('translationStation.bing-results', ['translationStation.translation-api-util'])

.controller('BingResultsCtrl', function(translationAPIUtil, $http, $rootScope, $scope) {

	$scope.logoSrc = '/images/bing_logo.png';

	$scope.$on('resetTranslatedText', function(event) {
		$scope.logoSrc = '/images/bing_logo.png';
		translationAPIUtil.resetTranslatedText($scope);
	});

	$scope.$on('translate', function(event) {
		translationAPIUtil.translate('bing', $rootScope.fromLanguageBingAbbrv,
			$rootScope.toLanguageBingAbbrv, $rootScope.translationInput, $scope);
	});
});
