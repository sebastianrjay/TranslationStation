'use strict';

angular.module('translationStation.input', ['translationStation.api-constants'])

.controller('InputCtrl', function(apiConstants, $http, $scope, translationAPIUtil) {

	$scope.AllLanguages = apiConstants.AllLanguages;
	$scope.detectLangBtnText = 'Detect language';
	$scope.isLanguageDetectionEnabled = true;

	$scope.srcLangShouldBeChecked = function() {
		if ('undefined' === typeof $scope.translationInput) return false;
		var inputLength = $scope.translationInput.length;
		return inputLength > 0 && inputLength % 5 === 0;
	};

	$scope.toggleLanguageDetection = function() {
		$scope.srcLangBingCode = null;
		$scope.detectLangBtnText = 'Detect language';
		$scope.isLanguageDetectionEnabled = !$scope.isLanguageDetectionEnabled;
	};

	$scope.translate = function() {
		if ($scope.isLanguageDetectionEnabled && $scope.srcLangShouldBeChecked()) {
			$scope.srcLangBingCode = null;
			translationAPIUtil.detectLanguage($scope);
		} else if ($scope.srcLangBingCode) {
			$scope.$broadcast('translate');
		}
	};

	$scope.setSrcLang = function(event) {
		$scope.isLanguageDetectionEnabled = false;
		$scope.detectLangBtnText = 'Detect language';

		$scope.srcLang = $.parseHTML(event.currentTarget.innerHTML.trim())[0].innerHTML.trim();
		$scope.srcLangBingCode = apiConstants.BingLanguageCodes[$scope.srcLang];
		$scope.srcLangFrenglyCode = apiConstants.FrenglyLanguageCodes[$scope.srcLang];
		$scope.srcLangYandexCode = apiConstants.YandexLanguageCodes[$scope.srcLang];
		if ($scope.translationInput && $scope.srcLang && $scope.destLang) {
			$scope.translate();
		}
	};

	$scope.setDestLang = function(event) {
		$scope.$broadcast('resetTranslatedText');
		$scope.destLang = $.parseHTML(event.currentTarget.innerHTML.trim())[0].innerHTML.trim();
		$scope.destLangBingCode = apiConstants.BingLanguageCodes[$scope.destLang];
		$scope.destLangFrenglyCode = apiConstants.FrenglyLanguageCodes[$scope.destLang];
		$scope.destLangYandexCode = apiConstants.YandexLanguageCodes[$scope.destLang];
		if ($scope.translationInput && $scope.srcLang && $scope.destLang) {
			$scope.translate();
		}
	};
});

$(document).on('click', '.language-container', function(event) {
	$(event.currentTarget).parent().children().children().removeClass('selected');
	$(event.currentTarget).children().addClass('selected');
});
