'use strict';

// Declare app level module which depends on views, and components

angular.module('translationStation', [
	'translationStation.api-constants',
  'translationStation.bing-results',
  'translationStation.google-results',
  'translationStation.yandex-results',
  'translationStation.input',
  'translationStation.translation-api-util',
  'translationStation.web-service-x-results'
]);
