var request = require('request');
var NodeCache = require('node-cache');
var Frengly = {};
Frengly.queryCache = new NodeCache();

Frengly.translate = function(srcLang, destLang, text, completionCallback) {
	var data = {
		src: srcLang,
		dest: destLang,
		text: text,
		email: process.env.FRENGLY_EMAIL,
		password: process.env.FRENGLY_PASSWORD
	};

	var options = {
		uri: process.env.FRENGLY_ROOT_URL,
		method: 'POST',
		json: data
	};

	request(options, function(error, response, body) {
		if (error) {
			console.error('Frengly translate error: ', error);
		} else {
			var translatedText = body.translation;
			Frengly.queryCache.set((srcLang + destLang + text), translatedText);
			completionCallback(translatedText);
		}
  });
};

module.exports = Frengly;
