var request = require('request');
var NodeCache = require('node-cache');
var Yandex = {};
Yandex.queryCache = new NodeCache();

Yandex.translate = function(srcLang, destLang, text, completionCallback) {
	var url = process.env.YANDEX_ROOT_URL + '?key=' + process.env.YANDEX_API_KEY + 
		'&text=' + encodeURIComponent(text) + '&lang=' + srcLang + '-' + destLang;

  request(url, function(error, response, body) {
		if (error) {
			console.error(error);
		} else {
			var translatedText = JSON.parse(body).text[0];
			Yandex.queryCache.set((srcLang + destLang + text), translatedText);
			completionCallback(translatedText);
		}
  });
};

module.exports = Yandex;
