'use strict';

angular.module('translationStation.input', ['translationStation.api-constants'])

.controller('InputCtrl', function(apiConstants, $http, $rootScope, $scope) {

	$scope.AllLanguages = apiConstants.AllLanguages;

	$scope.translate = function() {
		$scope.$broadcast('translate');
	};

	$scope.setFromLang = function($event) {
		$scope.fromLanguage = $.parseHTML(event.currentTarget.innerHTML.trim())[0].innerHTML.trim();
		$rootScope.fromLanguageBingAbbrv = apiConstants.BingLanguages[$scope.fromLanguage];
		$rootScope.fromLanguageGoogleAbbrv = apiConstants.GoogleLanguages[$scope.fromLanguage];
		$rootScope.fromLanguageYandexAbbrv = apiConstants.YandexLanguages[$scope.fromLanguage];
	};

	$scope.setToLang = function($event) {
		$scope.toLanguage = $.parseHTML(event.currentTarget.innerHTML.trim())[0].innerHTML.trim();
		$rootScope.toLanguageBingAbbrv = apiConstants.BingLanguages[$scope.toLanguage];
		$rootScope.toLanguageGoogleAbbrv = apiConstants.GoogleLanguages[$scope.toLanguage];
		$rootScope.toLanguageYandexAbbrv = apiConstants.YandexLanguages[$scope.toLanguage];
	};
});

$(document).on('click', '.language-container', function(event) {
	$(event.currentTarget).parent().children().children().removeClass('selected');
	$(event.currentTarget).children().addClass('selected');
});
