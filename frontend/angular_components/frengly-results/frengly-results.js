'use strict';

angular.module('translationStation.frengly-results', ['translationStation.translation-api-util'])

.controller('FrenglyResultsCtrl', function(translationAPIUtil, $controller, $http, $scope) {
	$controller('InputCtrl', { $scope: $scope });

	$scope.logoSrc = '/images/frengly_logo.png';

	$scope.$on('resetTranslatedText', function(event) {
		$scope.logoSrc = '/images/frengly_logo.png';
		translationAPIUtil.resetTranslatedText($scope);
	});

	$scope.$on('translate', function(event) {
		translationAPIUtil.translate('frengly', $scope, $scope.srcLangFrenglyCode,
			$scope.destLangFrenglyCode);
	});
});
