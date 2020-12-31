'use strict';

angular.module('translationStation.input', ['translationStation.api-constants'])

.controller('InputCtrl', function(apiConstants, $http, $scope, translationAPIUtil) {

	$scope.AllLanguages = apiConstants.AllLanguages;
	$scope.detectLangBtnText = 'Detect language';
	$scope.isLanguageDetectionEnabled = true;
	$scope.justDetectedLang = false;

	$scope.enableLanguageDetection = function() {
		$scope.detectLangBtnText = 'Detect language';
		$scope.isLanguageDetectionEnabled = true;
	};

	$scope.setDestLang = function(event) {
		$scope.destLang = $.parseHTML(event.currentTarget.innerHTML.trim())[0].innerHTML.trim();
		if (!$scope.destLang) return;
		$scope.destLangBingCode = apiConstants.BingLanguageCodes[$scope.destLang] || 'unsupported';
		$scope.destLangFrenglyCode = apiConstants.FrenglyLanguageCodes[$scope.destLang] || 'unsupported';
		$scope.destLangYandexCode = apiConstants.YandexLanguageCodes[$scope.destLang] || 'unsupported';
		if ($scope.translationInput && $scope.srcLang && $scope.destLang) {
			$scope.translate();
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

	$scope.translate = function() {
		if ($scope.isLanguageDetectionEnabled && ($scope.translationInput || '').trim() &&
				!$scope.justDetectedLang) {
			$scope.justDetectedLang = true;
			translationAPIUtil.detectLanguage($scope); // later calls $scope.translate() again
		} else if ($scope.srcLang) {
			$scope.justDetectedLang = false;
			$scope.timeout && clearTimeout($scope.timeout);
			$scope.timeout = setTimeout(function () { $scope.$broadcast('translate') }, 600);
		}
	};
});

$(document).on('click', '.language-container', function(event) {
	$(event.currentTarget).parent().children().children().removeClass('selected');
	$(event.currentTarget).children().addClass('selected');
});
