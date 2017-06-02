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
  ar: 'Arabic',
  'bs-Latn': 'Bosnian (Latin)',
  bg: 'Bulgarian',
  ca: 'Catalan',
  'zh-CHS': 'Chinese Simplified',
  'zh-CHT': 'Chinese Traditional',
  hr: 'Croatian',
  cs: 'Czech',
  da: 'Danish',
  nl: 'Dutch',
  en: 'English',
  et: 'Estonian',
  fi: 'Finnish',
  fr: 'French',
  de: 'German',
  el: 'Greek',
  ht: 'Haitian Creole',
  he: 'Hebrew',
  hi: 'Hindi',
  mww: 'Hmong Daw',
  hu: 'Hungarian',
  id: 'Indonesian',
  it: 'Italian',
  ja: 'Japanese',
  sw: 'Kiswahili',
  tlh: 'Klingon',
  'tlh-Qaak': 'Klingon (pIqaD)',
  ko: 'Korean',
  lv: 'Latvian',
  lt: 'Lithuanian',
  ms: 'Malay',
  mt: 'Maltese',
  no: 'Norwegian',
  fa: 'Persian',
  pl: 'Polish',
  pt: 'Portuguese',
  otq: 'Querétaro Otomi',
  ro: 'Romanian',
  ru: 'Russian',
  'sr-Cyrl': 'Serbian (Cyrillic)',
  'sr-Latn': 'Serbian (Latin)',
  sk: 'Slovak',
  sl: 'Slovenian',
  es: 'Spanish',
  sv: 'Swedish',
  th: 'Thai',
  tr: 'Turkish',
  uk: 'Ukrainian',
  ur: 'Urdu',
  vi: 'Vietnamese',
  cy: 'Welsh',
  yua: 'Yucatec Maya'
};

Constants.BingLanguageCodes = {
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

Constants.FrenglyLanguageCodes = {
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

Constants.YandexLanguageCodes = {
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
};

angular.module('translationStation.translation-api-util', ['translationStation.api-constants'])

.service('translationAPIUtil', ["apiConstants", "$http", function(apiConstants, $http) {

	this.detectLanguage = function($scope) {
		var queryString = '/api/bing/detect_language/?text=' + $scope.translationInput;

		$http.get(queryString)
			.success(function(data, status, headers, config) {
				$scope.srcLangBingCode = data;
				$scope.srcLangFrenglyCode = data;
				$scope.srcLangYandexCode = data;
				$scope.detectLangBtnText = apiConstants.BingLanguages[data] + ' - detected';
				$scope.translate();
			})
			.error(function(data, status, headers, config) {
				$scope.translatedText = 'A server error occurred when fetching ' + 
				'translation results from ' + capitalize(apiName) + '.';
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
		
		if (!srcLang && !destLang) {
			$scope.translatedText = 'To begin translation, choose a pair of languages.';
		} else if (srcLang && destLang) {
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
		} else {
			$scope.translatedText = capitalize(apiName) + 
				' translation is unavailable for the chosen languages.';
		}
	};
}]);

'use strict';

angular.module('translationStation.bing-results', ['translationStation.translation-api-util'])

.controller('BingResultsCtrl', ["translationAPIUtil", "$controller", "$http", "$scope", function(translationAPIUtil, $controller, $http, $scope) {
	$controller('InputCtrl', { $scope: $scope });

	$scope.logoSrc = '/images/bing_logo.png';

	$scope.$on('resetTranslatedText', function(event) {
		$scope.logoSrc = '/images/bing_logo.png';
		translationAPIUtil.resetTranslatedText($scope);
	});

	$scope.$on('translate', function(event) {
		translationAPIUtil.translate('bing', $scope, $scope.srcLangBingCode,
			$scope.destLangBingCode);
	});
}]);

'use strict';

var lastAPICallTime = null;

angular.module('translationStation.frengly-results', [])

.controller('FrenglyResultsCtrl', ["translationAPIUtil", "$controller", "$http", "$scope", function(translationAPIUtil, $controller, $http, $scope) {
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
}]);

'use strict';

angular.module('translationStation.yandex-results', ['translationStation.translation-api-util'])

.controller('YandexResultsCtrl', ["translationAPIUtil", "$controller", "$http", "$scope", function(translationAPIUtil, $controller, $http, $scope) {
	$controller('InputCtrl', { $scope: $scope });

	$scope.logoSrc = '/images/yandex_logo.png';

	$scope.$on('resetTranslatedText', function(event) {
		$scope.logoSrc = '/images/yandex_logo.png';
		translationAPIUtil.resetTranslatedText($scope);
	});

	$scope.$on('translate', function(event) {
		translationAPIUtil.translate('yandex', $scope, $scope.srcLangYandexCode,
			$scope.destLangYandexCode);
	});
}]);

'use strict';

angular.module('translationStation.input', ['translationStation.api-constants'])

.controller('InputCtrl', ["apiConstants", "$http", "$scope", "translationAPIUtil", function(apiConstants, $http, $scope, translationAPIUtil) {

	$scope.AllLanguages = apiConstants.AllLanguages;

	$scope.detectLangBtnText = 'Detect language';
	$scope.isLanguageDetectionEnabled = true;

	$scope.srcLangShouldBeChecked = function() {
		return typeof $scope.translationInput !== 'undefined' &&
			(
				~[3, 7].indexOf($scope.translationInput.length) || 
				$scope.translationInput.length % 5 === 0
			);
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
		} else if ($scope.srcLangBingCode || !$scope.isLanguageDetectionEnabled) {
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
}]);

$(document).on('click', '.language-container', function(event) {
	$(event.currentTarget).parent().children().children().removeClass('selected');
	$(event.currentTarget).children().addClass('selected');
});
