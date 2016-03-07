'use strict';

angular.module('translationStation.input', ['translationStation.api-constants'])

.controller('InputCtrl', function(apiConstants, $http, $rootScope, $scope) {
	var url = 'www.webservicex.net';

	$rootScope.AllLanguages = apiConstants.AllLanguages;

	$scope.fromLanguage = "";
	$scope.toLanguage = "";
	$rootScope.fromLanguageBingAbbrv = "";
	$rootScope.toLanguageBingAbbrv = "";
	$rootScope.fromLanguageGoogleAbbrv = "";
	$rootScope.toLanguageGoogleAbbrv = "";

	$scope.translate = function() {
		$scope.$broadcast('translate');
	};

	$scope.setFromLang = function($event) {
		$scope.fromLanguage = event.currentTarget.innerHTML.trim();
		$rootScope.fromLanguageBingAbbrv = apiConstants.BingLanguages[$scope.fromLanguage];
		$rootScope.fromLanguageGoogleAbbrv = apiConstants.GoogleLanguages[$scope.fromLanguage];
	};

	$scope.setToLang = function($event) {
		$scope.toLanguage = event.currentTarget.innerHTML.trim();
		$rootScope.toLanguageBingAbbrv = apiConstants.BingLanguages[$scope.toLanguage];
		$rootScope.toLanguageGoogleAbbrv = apiConstants.GoogleLanguages[$scope.toLanguage];
	};
});
