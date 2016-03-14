var requestMaker = require('request');
var NodeCache = require('node-cache');
var Frengly = {};
Frengly.queryCache = new NodeCache();

var lastAPICallTime = null;

Frengly.translate = function(srcLang, destLang, text, completionCallback) {
	var url = 'http://frengly.com?src=' + srcLang + '&dest=' + destLang + 
		'&text=' + text + '&outformat=json&email=sebastianrjay@gmail.com&password=Frengly1';

	if((lastAPICallTime && lastAPICallTime < (new Date().getTime() - 5000)) || 
			!lastAPICallTime) {

		requestMaker(url, function(error, response, body) {
			if(error) {
				throw error;
			} else {
				var translatedText = JSON.parse(body).translation;
				Frengly.queryCache.set((srcLang + destLang + text), translatedText);
				completionCallback(translatedText);
			}

			lastAPICallTime = new Date().getTime();
	  });
	}
}

module.exports = Frengly;
