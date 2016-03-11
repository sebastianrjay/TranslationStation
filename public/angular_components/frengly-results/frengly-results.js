'use strict';

var lastAPICallTime = null;

angular.module('translationStation.frengly-results', [])

.controller('FrenglyResultsCtrl', function(translationAPIUtil, $http, $rootScope, $scope) {
	$scope.translatedText = "";

	$scope.$on('resetTranslatedText', function(event) {
		translationAPIUtil.resetTranslatedText($scope);
	});

	$scope.$on('translate', function(event) {
		if(lastAPICallTime && lastAPICallTime < (new Date().getTime() - 4500)) {
			translationAPIUtil.translate('frengly', $rootScope.fromLanguageFrenglyAbbrv,
				$rootScope.toLanguageFrenglyAbbrv, $rootScope.translationInput, $scope);

			lastAPICallTime = new Date().getTime();
		} else {
			lastAPICallTime = (lastAPICallTime ? lastAPICallTime : new Date().getTime());
		}
	});
});
