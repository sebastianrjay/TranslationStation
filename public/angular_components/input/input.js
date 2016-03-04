'use strict';

var AllLanguages = ["Afrikaans", "Irish", "Albanian", "Italian", "Arabic", 
	"Japanese", "Azerbaijani", "Kannada", "Basque", "Korean", "Bengali", "Latin", 
	"Belarusian", "Latvian", "Bulgarian", "Lithuanian", "Catalan", "Macedonian", 
	"Chinese Simplified", "Malay", "Chinese Traditional", "Maltese", "Croatian", 
	"Norwegian", "Czech", "Persian", "Danish", "Polish", "Dutch", "Portuguese", 
	"English", "Romanian", "Esperanto", "Russian", "Estonian", "Serbian", 
	"Filipino", "Slovak", "Finnish", "Slovenian", "French", "Spanish", "Galician", 
	"Swahili", "Georgian", "Swedish", "German", "Tamil", "Greek", "Telugu", 
	"Gujarati", "Thai", "Haiti", "Creole", "Turkish", "Hebrew", "Ukrainian", 
	"Hindi", "Urdu", "Hungarian", "Vietnamese", "Icelandic", "Welsh", "Indonesian", 
	"Yiddish", "Bosnian (Latin)", "Haitian Creole", "Hmong Daw", "Kiswahili", 
	"Klingon", "Klingon (pIqaD)", "Querétaro Otomi", "Serbian (Cyrillic)",
	"Serbian (Latin)", "Yucatec Maya"];

var BingLanguages = {
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

var GoogleLanguages = {
	"Afrikaans": "af",
	"Irish": "ga",
	"Albanian": "sq",
	"Italian": "it",
	"Arabic": "ar",
	"Japanese": "ja",
	"Azerbaijani": "az",
	"Kannada": "kn",
	"Basque": "eu",
	"Korean": "ko",
	"Bengali": "bn",
	"Latin": "la",
	"Belarusian": "be",
	"Latvian": "lv",
	"Bulgarian": "bg",
	"Lithuanian": "lt",
	"Catalan": "ca",
	"Macedonian": "mk",
	"Chinese Simplified": "zh-CN",
	"Malay": "ms",
	"Chinese Traditional": "zh-TW",
	"Maltese": "mt",
	"Croatian": "hr",
	"Norwegian": "no",
	"Czech": "cs",
	"Persian": "fa",
	"Danish": "da",
	"Polish": "pl",
	"Dutch": "nl",
	"Portuguese": "pt",
	"English": "en",
	"Romanian": "ro",
	"Esperanto": "eo",
	"Russian": "ru",
	"Estonian": "et",
	"Serbian": "sr",
	"Filipino": "tl",
	"Slovak": "sk",
	"Finnish": "fi",
	"Slovenian": "sl",
	"French": "fr",
	"Spanish": "es",
	"Galician": "gl",
	"Swahili": "sw",
	"Georgian": "ka",
	"Swedish": "sv",
	"German": "de",
	"Tamil": "ta",
	"Greek": "el",
	"Telugu": "te",
	"Gujarati": "gu",
	"Thai": "th",
	"Haiti": "an",
	"Creole": "ht",
	"Turkish": "tr",
	"Hebrew": "iw",
	"Ukrainian": "uk",
	"Hindi": "hi",
	"Urdu": "ur",
	"Hungarian": "hu",
	"Vietnamese": "vi",
	"Icelandic": "is",
	"Welsh": "cy",
	"Indonesian": "id",
	"Yiddish": "yi"
};

var WebServiceXLanguages = ["English", "Chinese", "French", "German", 
	"Italian", "Japanese", "Korean", "Portuguese", "Spanish", "Russian"];

var WebServiceXPairings = ["EnglishTOChinese", "EnglishTOFrench", "EnglishTOGerman",
  "EnglishTOItalian", "EnglishTOJapanese", "EnglishTOKorean", "EnglishTOPortuguese",
  "EnglishTOSpanish", "ChineseTOEnglish", "FrenchTOEnglish", "FrenchTOGerman",
  "GermanTOEnglish", "GermanTOFrench", "ItalianTOEnglish", "JapaneseTOEnglish",
  "KoreanTOEnglish", "PortugueseTOEnglish", "RussianTOEnglish", "SpanishTOEnglish"];

// module.exports = Constants;

angular.module('translationStation.input', [])

.controller('InputCtrl', function($http, $rootScope, $scope) {
	var url = 'www.webservicex.net';
	$scope.inputText = "";

	$scope.AllLanguages = AllLanguages;
	$scope.BingLanguages = BingLanguages;
	$scope.GoogleLanguages = GoogleLanguages;
	$scope.WebServiceXLanguages = WebServiceXLanguages;
	$scope.WebServiceXPairings = WebServiceXPairings;

	$scope.fromLanguage = "";
	$scope.toLanguage = "";
	$scope.fromLanguageBingAbbrv = "";
	$scope.toLanguageBingAbbrv = "";
	$scope.fromLanguageGoogleAbbrv = "";
	$scope.toLanguageGoogleAbbrv = "";

	$scope.setFromLang = function(event) {
		$scope.fromLanguage = event.currentTarget.innerHTML.trim();
		$rootScope.fromLanguageBingAbbrv = BingLanguages[$scope.fromLanguage];
		$rootScope.fromLanguageGoogleAbbrv = GoogleLanguages[$scope.fromLanguage];
		console.log(event);
	};

	$scope.setToLang = function(event) {
		$scope.toLanguage = event.currentTarget.innerHTML.trim();
		$rootScope.toLanguageBingAbbrv = BingLanguages[$scope.toLanguage];
		$rootScope.toLanguageGoogleAbbrv = GoogleLanguages[$scope.toLanguage];
		console.log(event);
	};

	$scope.submitTranslationInput = function() {
		if($scope.translationInput) {
			console.log($scope.translationInput);
			$http.get;
		} else console.log('Translation input is undefined');
	};
});
