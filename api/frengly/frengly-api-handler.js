var requestMaker = require('request');
var NodeCache = require('node-cache');
var Frengly = {};
Frengly.queryCache = new NodeCache();

var lastAPICallTime = null;

Frengly.translate = function(fromLanguage, toLanguage, text, completionCallback) {
	var url = 'http://frengly.com?src=' + fromLanguage + '&dest=' + toLanguage + 
		'&text=' + text + '&outformat=json&email=sebastianrjay@gmail.com&password=Frengly1';

	if((lastAPICallTime && lastAPICallTime < (new Date().getTime() - 5000)) || 
			!lastAPICallTime) {

		requestMaker(url, function(error, response, body) {
			if(error) {
				throw error;
			} else {
				var translatedText = JSON.parse(body).translation;
				Frengly.queryCache.set((fromLanguage + toLanguage + text), translatedText);
				completionCallback(translatedText);
				lastAPICallTime = new Date().getTime();
			}
	  });
	}
}

module.exports = Frengly;
