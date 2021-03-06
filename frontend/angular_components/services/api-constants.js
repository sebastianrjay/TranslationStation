var Constants = {};

Constants.AllLanguages = [
  'English',              'Spanish',               'Arabic',
  'Afrikaans',            'Albanian',              'Armenian',
  'Azerbaijan',           'Basque',                'Belarusian',
  'Bosnian',              'Bulgarian',             'Cantonese (Traditional)',
  'Catalan',              'Chinese (Simplified)',  'Chinese (Traditional)',
  'Croatian',             'Czech',                 'Danish',
  'Dutch',                'Estonian',              'Filipino',
  'Finnish',              'French',                'Galician',
  'Georgian',             'German',                'Greek',
  'Haitian Creole',       'Hebrew',                'Hindi',
  'Hmong Daw',            'Hungarian',             'Icelandic',
  'Indonesian',           'Irish',                 'Italian',
  'Japanese',             'Kazakh',                'Kiswahili',
  'Klingon',              'Klingon (pIqaD)',       'Korean',
  'Kyrgyz',               'Latin',                 'Latvian',
  'Lithuanian',           'Macedonian',            'Malagasy',
  'Malay',                'Maltese',               'Mongolian',
  'Norwegian',            'Persian',               'Polish',
  'Portuguese',           'Querétaro Otomi',       'Romanian',
  'Russian',              'Serbian (Cyrillic)',    'Serbian (Latin)',
  'Slovak',               'Slovakian',             'Slovenian',
  'Swedish',              'Tagalog',               'Tajik',
  'Tatar',                'Thai',                  'Turkish',
  'Ukrainian',            'Urdu',                  'Uzbek',
  'Vietnamese',           'Welsh',                 'Yiddish',
  'Yucatec Maya'
];

Constants.BingLanguages = {
  ar: 'Arabic',
  'bs-Latn': 'Bosnian',
  bg: 'Bulgarian',
  yue: 'Cantonese (Traditional)',
  ca: 'Catalan',
  'zh-Hans': 'Chinese (Simplified)',
  'zh-Hant': 'Chinese (Traditional)',
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
	"Bosnian": "bs-Latn",
	"Bulgarian": "bg",
	"Catalan": "ca",
	"Chinese (Simplified)": "zh-Hans",
	"Chinese (Traditional)": "zh-Hant",
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
  'Serbian (Cyrillic)': 'sr',
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
  Arabic: 'ar',
  Armenian: 'hy',
  Azerbaijan: 'az',
  Afrikaans: 'af',
  Basque: 'eu',
  Belarusian: 'be',
  Bulgarian: 'bg',
  'Bosnian': 'bs',
  Welsh: 'cy',
  Vietnamese: 'vi',
  Hungarian: 'hu',
  'Haitian Creole': 'ht',
  Galician: 'gl',
  Dutch: 'nl',
  Greek: 'el',
  Georgian: 'ka',
  Danish: 'da',
  Yiddish: 'he',
  Indonesian: 'id',
  Irish: 'ga',
  Italian: 'it',
  Icelandic: 'is',
  Spanish: 'es',
  Kazakh: 'kk',
  Catalan: 'ca',
  Kyrgyz: 'ky',
  'Chinese (Simplified)': 'zh',
  'Chinese (Traditional)': 'zh',
  Korean: 'ko',
  Latin: 'la',
  Latvian: 'lv',
  Lithuanian: 'lt',
  Malagasy: 'mg',
  Malay: 'ms',
  Maltese: 'mt',
  Macedonian: 'mk',
  Mongolian: 'mn',
  German: 'de',
  Norwegian: 'no',
  Persian: 'fa',
  Polish: 'pl',
  Portuguese: 'pt',
  Romanian: 'ro',
  Russian: 'ru',
  'Serbian (Cyrillic)': 'sr',
  Slovakian: 'sk',
  Slovenian: 'sl',
  Swahili: 'sw',
  Tajik: 'tg',
  Thai: 'th',
  Tagalog: 'tl',
  Tatar: 'tt',
  Turkish: 'tr',
  Uzbek: 'uz',
  Ukrainian: 'uk',
  Finnish: 'fi',
  French: 'fr',
  Croatian: 'hr',
  Czech: 'cs',
  Swedish: 'sv',
  Estonian: 'et',
  Japanese: 'ja'
};

angular.module('translationStation.api-constants', []).value('apiConstants', Constants);
