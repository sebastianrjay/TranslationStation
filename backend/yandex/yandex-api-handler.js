var request = require('request');
var NodeCache = require('node-cache');
var Yandex = {};
Yandex.queryCache = new NodeCache();

Yandex.translate = function(srcLang, destLang, text, completionCallback) {
	const url = process.env.YANDEX_ROOT_URL + '?key=' + process.env.YANDEX_API_KEY + 
		'&text=' + encodeURIComponent(text) + '&lang=' + srcLang + '-' + destLang;

  request(url, function(error, response, bodyJSON) {
		if (error) {
			console.error('Yandex translate error: ', error);
		} else {
			const body = JSON.parse(bodyJSON);
			const translatedText = [].concat(body.text)[0];
			Yandex.queryCache.set((srcLang + destLang + text), translatedText);
			completionCallback(translatedText);
		}
  });
};

module.exports = Yandex;
