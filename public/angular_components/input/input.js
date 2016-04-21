'use strict';

angular.module('translationStation.input', ['translationStation.api-constants'])

.controller('InputCtrl', function(apiConstants, $http, $scope) {

	$scope.AllLanguages = apiConstants.AllLanguages;

	$scope.translate = function() {
		$scope.$broadcast('translate');
	};

	$scope.setFromLang = function(event) {
		$scope.srcLang = $.parseHTML(event.currentTarget.innerHTML.trim())[0].innerHTML.trim();
		$scope.srcLangBingAbbrv = apiConstants.BingLanguages[$scope.srcLang];
		$scope.srcLangFrenglyAbbrv = apiConstants.FrenglyLanguages[$scope.srcLang];
		$scope.srcLangYandexAbbrv = apiConstants.YandexLanguages[$scope.srcLang];
		if($scope.translationInput && $scope.srcLang && $scope.destLang) {
			$scope.translate();
		}
	};

	$scope.setToLang = function(event) {
		$scope.$broadcast('resetTranslatedText');
		$scope.destLang = $.parseHTML(event.currentTarget.innerHTML.trim())[0].innerHTML.trim();
		$scope.destLangBingAbbrv = apiConstants.BingLanguages[$scope.destLang];
		$scope.destLangFrenglyAbbrv = apiConstants.FrenglyLanguages[$scope.destLang];
		$scope.destLangYandexAbbrv = apiConstants.YandexLanguages[$scope.destLang];
		if($scope.translationInput && $scope.srcLang && $scope.destLang) {
			$scope.translate();
		}
	};
});

$(document).on('click', '.language-container', function(event) {
	$(event.currentTarget).parent().children().children().removeClass('selected');
	$(event.currentTarget).children().addClass('selected');
});
