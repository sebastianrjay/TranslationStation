var freeTranslationError = function(api) {
	return 'Free language translation via ' + api + ' quota exceeded.';
};

var lastTranslationTime = {};
// Bing has no restrictions; Frengly requires query spacing of 2s; Yandex has a monthly usage quota
var minDebounceMs = { 'Bing': 250, 'Frengly': 2000, 'Yandex': 1000 };

var serverError = function(api) {
	return 'A server error occurred during ' + api + ' language translation.'
};

var translationUnavailableError = function(api) {
	return api + ' translation is unavailable for the chosen languages.';
};

angular.module('translationStation.translation-api-util', ['translationStation.api-constants'])

.service('translationAPIUtil', function(apiConstants, $http) {

	this.detectLanguage = function($scope) {
		var queryString = '/api/bing/detect_language/?text=' + $scope.translationInput;

		$http.get(queryString)
			.success(function(languageCode, status, headers, config) {
				var detectedLanguage = apiConstants.BingLanguages[languageCode];
				$scope.srcLang = detectedLanguage ? languageCode : null;
				$scope.srcLangBingCode = languageCode;
				$scope.srcLangFrenglyCode = languageCode;
				$scope.srcLangYandexCode = languageCode;
				$scope.detectLangBtnText = detectedLanguage + ' - detected';
				$scope.translate();
			})
			.error(function(data, status, headers, config) {
				$scope.translatedText = 'A server error occurred during language detection';
			});
	};

	this.queryApiDebounced = function (apiName, $scope, srcLangCode, destLangCode) {
		var lastTime = lastTranslationTime[apiName];
		var uri = '/api/' + apiName.toLowerCase() + '/translate';
		var data = {
			from: srcLangCode,
			to: destLangCode,
			text: $scope.translationInput,
		};

		if (!lastTime || (lastTime && lastTime < (new Date().getTime() - minDebounceMs[apiName]))) {
			lastTranslationTime[apiName] = new Date().getTime();
		} else return;

		$scope.translatedText += '...';
		$http.post(uri, JSON.stringify(data))
			.success(function(data, status, headers, config) {
				$scope.translatedText = data || freeTranslationError(apiName);
			})
			.error(function(data, status, headers, config) {
				$scope.translatedText = serverError(apiName);
			});
	};

	this.resetTranslatedText = function($scope) {
		$scope.translatedText = '';
	};

	this.translate = function(apiName, $scope, srcLangCode, destLangCode) {
		if (!$scope.translationInput) {
			$scope.$broadcast('resetTranslatedText');
			return;
		}

		$scope.logoSrc = '';

		if (srcLangCode && !destLangCode) {
			$scope.translatedText = 'Please select a destination language.';
		} else if (srcLangCode && destLangCode !== 'unsupported') {
			this.queryApiDebounced(apiName, $scope, srcLangCode, destLangCode);
		} else {
			$scope.translatedText = translationUnavailableError(apiName);
		}

		$scope.$apply();
	};
});
