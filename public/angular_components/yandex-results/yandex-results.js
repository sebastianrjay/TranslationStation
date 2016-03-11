'use strict';

angular.module('translationStation.yandex-results', ['translationStation.translation-api-util'])

.controller('YandexResultsCtrl', function(translationAPIUtil, $http, $rootScope, $scope) {

	$scope.logoSrc = '/images/yandex_logo.png';

	$scope.$on('resetTranslatedText', function(event) {
		$scope.logoSrc = '/images/yandex_logo.png';
		translationAPIUtil.resetTranslatedText($scope);
	});

	$scope.$on('translate', function(event) {
		translationAPIUtil.translate('yandex', $rootScope.fromLanguageYandexAbbrv,
			$rootScope.toLanguageYandexAbbrv, $rootScope.translationInput, $scope);
	});
});