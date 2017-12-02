var capitalize = function(string) {
	return string[0].toUpperCase() + string.slice(1);
};

angular.module('translationStation.translation-api-util', ['translationStation.api-constants'])

.service('translationAPIUtil', function(apiConstants, $http) {

	this.detectLanguage = function($scope) {
		var queryString = '/api/bing/detect_language/?text=' + $scope.translationInput;

		$http.get(queryString)
			.success(function(languageCode, status, headers, config) {
				var detectedLanguage = apiConstants.BingLanguages[languageCode];
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

	this.resetTranslatedText = function($scope) {
		$scope.translatedText = '';
	};

	this.translate = function(apiName, $scope, srcLang, destLang) {
		if ($scope.translationInput === '') {
			$scope.$broadcast('resetTranslatedText');
			return;
		}

		$scope.logoSrc = '';
		
		if (srcLang && destLang) {
			var uri = '/api/' + apiName + '/translate';
			var data = {
				from: srcLang,
				to: destLang,
				text: $scope.translationInput,
			};

			$http.post(uri, JSON.stringify(data))
				.success(function(data, status, headers, config) {
					$scope.translatedText = data;
				})
				.error(function(data, status, headers, config) {
					$scope.translatedText = 'A server error occurred when fetching ' + 
						'translation results from ' + capitalize(apiName) + '.';
				});
		} else if (srcLang && !destLang) {
			$scope.translatedText =
				'Source language detected. Please select a destination language.';
		} else {
			$scope.translatedText = capitalize(apiName) + 
				' translation is unavailable for the chosen languages.';
		}
	};
});
