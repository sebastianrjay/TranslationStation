'use strict';

var lastAPICallTime = null;

angular.module('translationStation.frengly-results', [])

.controller('FrenglyResultsCtrl', function(translationAPIUtil, $controller, $http, $scope) {
	$controller('InputCtrl', { $scope: $scope });

	$scope.logoSrc = '/images/frengly_logo.png';

	$scope.$on('resetTranslatedText', function(event) {
		$scope.logoSrc = '/images/frengly_logo.png';
		translationAPIUtil.resetTranslatedText($scope);
	});

	$scope.$on('translate', function(event) {
		// Query at most every 2.5s on keyup; Frengly only permits queries every 2s
		if (lastAPICallTime && lastAPICallTime < (new Date().getTime() - 2500)) {
			translationAPIUtil.translate('frengly', $scope, $scope.srcLangFrenglyCode,
				$scope.destLangFrenglyCode);

			lastAPICallTime = new Date().getTime();
		} else {
			lastAPICallTime = (lastAPICallTime ? lastAPICallTime : new Date().getTime());
		}
	});
});
