'use strict';

var lastAPICallTime = null;

angular.module('translationStation.frengly-results', [])

.controller('FrenglyResultsCtrl', function(translationAPIUtil, $http, $rootScope, $scope) {

	$scope.logoSrc = '/images/frengly_logo.png';

	$scope.$on('resetTranslatedText', function(event) {
		$scope.logoSrc = '/images/frengly_logo.png';
		translationAPIUtil.resetTranslatedText($scope);
	});

	$scope.$on('translate', function(event) {
		if(lastAPICallTime && lastAPICallTime < (new Date().getTime() - 5000)) {
			translationAPIUtil.translate('frengly', $rootScope.fromLanguageFrenglyAbbrv,
				$rootScope.toLanguageFrenglyAbbrv, $rootScope.translationInput, $scope);

			lastAPICallTime = new Date().getTime();
		} else {
			lastAPICallTime = (lastAPICallTime ? lastAPICallTime : new Date().getTime());
		}
	});
});
