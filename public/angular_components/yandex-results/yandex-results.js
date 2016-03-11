'use strict';

angular.module('translationStation.yandex-results', ['translationStation.translation-api-util'])

.controller('YandexResultsCtrl', function(translationAPIUtil, $http, $rootScope, $scope) {

	$scope.$on('resetTranslatedText', function(event) {
		translationAPIUtil.resetTranslatedText($scope);
	});

	$scope.$on('translate', function(event) {
		translationAPIUtil.translate('yandex', $rootScope.fromLanguageYandexAbbrv,
			$rootScope.toLanguageYandexAbbrv, $rootScope.translationInput, $scope);
	});
});
