'use strict';

angular.module('translationStation.input', ['translationStation.api-constants'])

.controller('InputCtrl', function(apiConstants, $http, $rootScope, $scope) {

	$scope.AllLanguages = apiConstants.AllLanguages;

	$scope.translate = function() {
		$scope.$broadcast('translate');
	};

	$scope.setFromLang = function($event) {
		$scope.srcLang = $.parseHTML(event.currentTarget.innerHTML.trim())[0].innerHTML.trim();
		$rootScope.srcLangBingAbbrv = apiConstants.BingLanguages[$scope.srcLang];
		$rootScope.srcLangFrenglyAbbrv = apiConstants.FrenglyLanguages[$scope.srcLang];
		$rootScope.srcLangYandexAbbrv = apiConstants.YandexLanguages[$scope.srcLang];
	};

	$scope.setToLang = function($event) {
		$scope.$broadcast('resetTranslatedText');
		$scope.destLang = $.parseHTML(event.currentTarget.innerHTML.trim())[0].innerHTML.trim();
		$rootScope.destLangBingAbbrv = apiConstants.BingLanguages[$scope.destLang];
		$rootScope.destLangFrenglyAbbrv = apiConstants.FrenglyLanguages[$scope.destLang];
		$rootScope.destLangYandexAbbrv = apiConstants.YandexLanguages[$scope.destLang];
	};
});

$(document).on('click', '.language-container', function(event) {
	$(event.currentTarget).parent().children().children().removeClass('selected');
	$(event.currentTarget).children().addClass('selected');
});
