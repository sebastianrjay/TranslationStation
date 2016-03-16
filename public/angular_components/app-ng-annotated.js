'use strict';

// Declare app level module which depends on views, and components

angular.module('translationStation', [
	'translationStation.api-constants',
  'translationStation.bing-results',
  'translationStation.frengly-results',
  'translationStation.yandex-results',
  'translationStation.input',
  'translationStation.translation-api-util'
]);

var Constants = {};

Constants.AllLanguages = [
  'English',
  'Spanish',
  'Arabic',
  'Bosnian (Latin)',
  'Bulgarian',
  'Catalan',
  'Chinese Simplified',
  'Chinese Traditional',
  'Croatian',
  'Czech',
  'Danish',
  'Dutch',
  'Estonian',
  'Finnish',
  'French',
  'German',
  'Greek',
  'Haitian Creole',
  'Hebrew',
  'Hindi',
  'Hmong Daw',
  'Hungarian',
  'Indonesian',
  'Italian',
  'Japanese',
  'Kiswahili',
  'Klingon',
  'Klingon (pIqaD)',
  'Korean',
  'Latvian',
  'Lithuanian',
  'Malay',
  'Maltese',
  'Norwegian',
  'Persian',
  'Polish',
  'Portuguese',
  'Querétaro Otomi',
  'Romanian',
  'Russian',
  'Serbian (Cyrillic)',
  'Serbian (Latin)',
  'Slovak',
  'Slovenian',
  'Swedish',
  'Thai',
  'Turkish',
  'Ukrainian',
  'Urdu',
  'Vietnamese',
  'Welsh',
  'Yucatec Maya',
  'Chinese (Simplified)',
  'Chinese (Traditional)',
  'Filipino',
  'Icelandic',
  'Irish',
  'Latin',
  'Macedonian',
  'Serbian',
  'Slovakian',
  'Albanian',
  'Armenian',
  'Azerbaijan',
  'Afrikaans',
  'Basque',
  'Belarusian',
  'Bosnian',
  'Haitian (Creole)',
  'Galician',
  'Georgian',
  'Yiddish',
  'Kazakh',
  'Kyrgyz',
  'Chinese',
  'Malagasy',
  'Mongolian',
  'Swahili',
  'Tajik',
  'Tagalog',
  'Tatar',
  'Uzbek'
];

Constants.BingLanguages = {
	"Arabic": "ar",
	"Bosnian (Latin)": "bs-Latn",
	"Bulgarian": "bg",
	"Catalan": "ca",
	"Chinese Simplified": "zh-CHS",
	"Chinese Traditional": "zh-CHT",
	"Croatian": "hr",
	"Czech": "cs",
	"Danish": "da",
	"Dutch": "nl",
	"English": "en",
	"Estonian": "et",
	"Finnish": "fi",
	"French": "fr",
	"German": "de",
	"Greek": "el",
	"Haitian Creole": "ht",
	"Hebrew": "he",
	"Hindi": "hi",
	"Hmong Daw": "mww",
	"Hungarian": "hu",
	"Indonesian": "id",
	"Italian": "it",
	"Japanese": "ja",
	"Kiswahili": "sw",
	"Klingon": "tlh",
	"Klingon (pIqaD)": "tlh-Qaak",
	"Korean": "ko",
	"Latvian": "lv",
	"Lithuanian": "lt",
	"Malay": "ms",
	"Maltese": "mt",
	"Norwegian": "no",
	"Persian": "fa",
	"Polish": "pl",
	"Portuguese": "pt",
	"Querétaro Otomi": "otq",
	"Romanian": "ro",
	"Russian": "ru",
	"Serbian (Cyrillic)": "sr-Cyrl",
	"Serbian (Latin)": "sr-Latn",
	"Slovak": "sk",
	"Slovenian": "sl",
	"Spanish": "es",
	"Swedish": "sv",
	"Thai": "th",
	"Turkish": "tr",
	"Ukrainian": "uk",
	"Urdu": "ur",
	"Vietnamese": "vi",
	"Welsh": "cy",
	"Yucatec Maya": "yua"
};

Constants.FrenglyLanguages = {
  Arabic: 'ar',
  Bulgarian: 'bg',
  'Chinese (Simplified)': 'zhCN',
  'Chinese (Traditional)': 'zhTW',
  Croatian: 'hr',
  Czech: 'cs',
  Danish: 'da',
  Dutch: 'nl',
  English: 'en',
  Estonian: 'et',
  Filipino: 'tl',
  Finnish: 'fi',
  French: 'fr',
  German: 'de',
  Greek: 'el',
  Hebrew: 'iw',
  Hindi: 'hi',
  Hungarian: 'hu',
  Icelandic: 'is',
  Indonesian: 'id',
  Irish: 'ga',
  Italian: 'it',
  Japanese: 'ja',
  Korean: 'ko',
  Latin: 'la',
  Latvian: 'lv',
  Lithuanian: 'lt',
  Macedonian: 'mk',
  Maltese: 'mt',
  Norwegian: 'no',
  Persian: 'fa',
  Polish: 'pl',
  Portuguese: 'pt',
  Romanian: 'ro',
  Russian: 'ru',
  Serbian: 'sr',
  Slovakian: 'sk',
  Slovenian: 'si',
  Spanish: 'es',
  Swedish: 'sv',
  Thai: 'th',
  Turkish: 'tr',
  Vietnamese: 'vi'
};

Constants.YandexLanguages = {
  Albanian: 'sq',
  English: 'en',
  Arabic:  'ar',
  Armenian:  'hy',
  Azerbaijan:  'az',
  Afrikaans: 'af',
  Basque:  'eu',
  Belarusian:  'be',
  Bulgarian: 'bg',
  Bosnian: 'bs',
  Welsh: 'cy',
  Vietnamese:  'vi',
  Hungarian: 'hu',
  'Haitian (Creole)':  'ht',
  Galician:  'gl',
  Dutch: 'nl',
  Greek: 'el',
  Georgian:  'ka',
  Danish:  'da',
  Yiddish: 'he',
  Indonesian:  'id',
  Irish: 'ga',
  Italian: 'it',
  Icelandic: 'is',
  Spanish: 'es',
  Kazakh:  'kk',
  Catalan: 'ca',
  Kyrgyz:  'ky',
  Chinese: 'zh',
  Korean:  'ko',
  Latin: 'la',
  Latvian: 'lv',
  Lithuanian:  'lt',
  Malagasy:  'mg',
  Malay: 'ms',
  Maltese: 'mt',
  Macedonian:  'mk',
  Mongolian: 'mn',
  German:  'de',
  Norwegian: 'no',
  Persian: 'fa',
  Polish: 'pl',
  Portuguese:  'pt',
  Romanian:  'ro',
  Russian: 'ru',
  Serbian: 'sr',
  Slovakian: 'sk',
  Slovenian: 'sl',
  Swahili: 'sw',
  Tajik: 'tg',
  Thai:  'th',
  Tagalog: 'tl',
  Tatar: 'tt',
  Turkish: 'tr',
  Uzbek: 'uz',
  Ukrainian: 'uk',
  Finnish:  'fi',
  French:  'fr',
  Croatian:  'hr',
  Czech: 'cs',
  Swedish: 'sv',
  Estonian:  'et',
  Japanese:  'ja'
};

angular.module('translationStation.api-constants', [])
	.value('apiConstants', Constants);

var capitalize = function(string) {
	return string[0].toUpperCase() + string.slice(1);
}

angular.module('translationStation.translation-api-util', [])
	.service('translationAPIUtil', ["$http", function($http) {
		
		this.resetTranslatedText = function($scope) {
			$scope.translatedText = "";
		};

		this.translate = function(apiName, srcLang, destLang, inputText, $scope) {
			if(inputText === '') {
				$scope.$broadcast('resetTranslatedText');
				return;
			}

			$scope.logoSrc = '';
			
			if(!srcLang && !destLang) {
				$scope.translatedText = 'To begin translation, choose a pair of languages.';
			} else if(srcLang && destLang) {
				var queryString = '/api/' + apiName + '/translate/?from=' + srcLang +
				'&to=' + destLang + '&text=' + inputText;

				$http.get(queryString)
					.success(function(data, status, headers, config) {
						$scope.translatedText = data;
					})
					.error(function(data, status, headers, config) {
						$scope.translatedText = 'A server error occurred when fetching ' + 
						'translation results from ' + capitalize(apiName) + '.';
					});
			} else {
				$scope.translatedText = capitalize(apiName) + 
					' translation is unavailable for the chosen languages.';
			}
		};
	}]);

'use strict';

angular.module('translationStation.bing-results', ['translationStation.translation-api-util'])

.controller('BingResultsCtrl', ["translationAPIUtil", "$http", "$rootScope", "$scope", function(translationAPIUtil, $http, $rootScope, $scope) {

	$scope.logoSrc = '/images/bing_logo.png';

	$scope.$on('resetTranslatedText', function(event) {
		$scope.logoSrc = '/images/bing_logo.png';
		translationAPIUtil.resetTranslatedText($scope);
	});

	$scope.$on('translate', function(event) {
		translationAPIUtil.translate('bing', $rootScope.srcLangBingAbbrv,
			$rootScope.destLangBingAbbrv, $rootScope.translationInput, $scope);
	});
}]);

'use strict';

var lastAPICallTime = null;

angular.module('translationStation.frengly-results', [])

.controller('FrenglyResultsCtrl', ["translationAPIUtil", "$http", "$rootScope", "$scope", function(translationAPIUtil, $http, $rootScope, $scope) {

	$scope.logoSrc = '/images/frengly_logo.png';

	$scope.$on('resetTranslatedText', function(event) {
		$scope.logoSrc = '/images/frengly_logo.png';
		translationAPIUtil.resetTranslatedText($scope);
	});

	$scope.$on('translate', function(event) {
		if(lastAPICallTime && lastAPICallTime < (new Date().getTime() - 5000)) {
			translationAPIUtil.translate('frengly', $rootScope.srcLangFrenglyAbbrv,
				$rootScope.destLangFrenglyAbbrv, $rootScope.translationInput, $scope);

			lastAPICallTime = new Date().getTime();
		} else {
			lastAPICallTime = (lastAPICallTime ? lastAPICallTime : new Date().getTime());
		}
	});
}]);

'use strict';

angular.module('translationStation.yandex-results', ['translationStation.translation-api-util'])

.controller('YandexResultsCtrl', ["translationAPIUtil", "$http", "$rootScope", "$scope", function(translationAPIUtil, $http, $rootScope, $scope) {

	$scope.logoSrc = '/images/yandex_logo.png';

	$scope.$on('resetTranslatedText', function(event) {
		$scope.logoSrc = '/images/yandex_logo.png';
		translationAPIUtil.resetTranslatedText($scope);
	});

	$scope.$on('translate', function(event) {
		translationAPIUtil.translate('yandex', $rootScope.srcLangYandexAbbrv,
			$rootScope.destLangYandexAbbrv, $rootScope.translationInput, $scope);
	});
}]);

'use strict';

angular.module('translationStation.input', ['translationStation.api-constants'])

.controller('InputCtrl', ["apiConstants", "$http", "$rootScope", "$scope", function(apiConstants, $http, $rootScope, $scope) {

	$scope.AllLanguages = apiConstants.AllLanguages;

	$scope.translate = function() {
		$scope.$broadcast('translate');
	};

	$scope.setFromLang = function(event) {
		$scope.srcLang = $.parseHTML(event.currentTarget.innerHTML.trim())[0].innerHTML.trim();
		$rootScope.srcLangBingAbbrv = apiConstants.BingLanguages[$scope.srcLang];
		$rootScope.srcLangFrenglyAbbrv = apiConstants.FrenglyLanguages[$scope.srcLang];
		$rootScope.srcLangYandexAbbrv = apiConstants.YandexLanguages[$scope.srcLang];
		if($scope.srcLang && $scope.destLang) $scope.translate();
	};

	$scope.setToLang = function(event) {
		$scope.$broadcast('resetTranslatedText');
		$scope.destLang = $.parseHTML(event.currentTarget.innerHTML.trim())[0].innerHTML.trim();
		$rootScope.destLangBingAbbrv = apiConstants.BingLanguages[$scope.destLang];
		$rootScope.destLangFrenglyAbbrv = apiConstants.FrenglyLanguages[$scope.destLang];
		$rootScope.destLangYandexAbbrv = apiConstants.YandexLanguages[$scope.destLang];
		if($scope.srcLang && $scope.destLang) $scope.translate();
	};
}]);

$(document).on('click', '.language-container', function(event) {
	$(event.currentTarget).parent().children().children().removeClass('selected');
	$(event.currentTarget).children().addClass('selected');
});
