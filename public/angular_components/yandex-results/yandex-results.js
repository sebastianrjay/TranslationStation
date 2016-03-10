'use strict';

angular.module('translationStation.yandex-results', ['translationStation.translation-api-util'])

.controller('YandexResultsCtrl', function(translationAPIUtil, $http, $rootScope, $scope) {
	$scope.translatedText = "";

	$scope.$on('translate', function(event) {
		translationAPIUtil.translate('yandex', $rootScope.fromLanguageYandexAbbrv,
			$rootScope.toLanguageYandexAbbrv, $rootScope.translationInput, $scope);
	});
});
