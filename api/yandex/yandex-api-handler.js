var requestMaker = require('request');
var NodeCache = require('node-cache');
var Yandex = {};
Yandex.queryCache = new NodeCache();

var YandexAPIKey = 'trnsl.1.1.20160309T231137Z.b294fc0927e1ef12.b3fd557fbac6b99b74f0b8ab132f2ececdb68939';

Yandex.translate = function(fromLanguage, toLanguage, text, completionCallback) {
	var url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=' 
			+ YandexAPIKey + '&text=' + encodeURIComponent(text) + '&lang='
			+ fromLanguage + '-' + toLanguage;
		
  requestMaker(url, function(error, response, body) {
		if(error) {
			throw error;
		} else {
			var translatedText = JSON.parse(body).text[0];
			Yandex.queryCache.set((fromLanguage + toLanguage + text), translatedText);
			completionCallback(translatedText);
		}
  });
};

module.exports = Yandex;
