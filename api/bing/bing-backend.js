var requestMaker = require('request');
var NodeCache = require('node-cache');
var Bing = {};
Bing.queryCache = new NodeCache();

Bing.translate = function(fromLanguage, toLanguage, text, successCallback) {
	if(Bing.bingToken && Bing.bingExpiration > (new Date().getTime() + 30000)) {
		var url = "http://api.microsofttranslator.com/V2/Ajax.svc/Translate?oncomplete=mycallback&appId=Bearer " + 
			encodeURIComponent(Bing.bingToken) + "&from=" + fromLanguage + 
			"&to=" + toLanguage + "&text=" + text;
			
    requestMaker(url, function(error, response, body) {
  		if(error) {
  			throw error;
  		} else {
  			var translatedText = body.slice(12, body.length - 2);
  			Bing.queryCache.set((fromLanguage + toLanguage + text), translatedText);
  			successCallback(translatedText);
  		}
    });
	} else {
		Bing.fetchBingToken(Bing.translate, fromLanguage, toLanguage, text, successCallback);
	}
};

Bing.fetchBingToken = function(successCallback) {
	var callbackArguments = [].slice.call(arguments, 1);

	requestMaker.post(
	    'https://datamarket.accesscontrol.windows.net/v2/OAuth2-13/',
	    { form: { 
	       client_id : 'TranslationStationAngular', 
	       client_secret  : '8UdAUfYMIL7ZmSQ1fX0m9q81ejVeItUMZzA1PoiE1WU=', 
	       scope  : 'http://api.microsofttranslator.com', 
	       grant_type  : 'client_credentials' 
	    } },
	    function (error, bingResponse, body) {
        if (!error && bingResponse.statusCode == 200) {
        		var responseBody = JSON.parse(bingResponse.body);
        		Bing.bingToken = responseBody.access_token;
        		Bing.bingExpiration = new Date().getTime() + 595000;
        		successCallback.apply(this, callbackArguments);
        } else {
            throw 'ERROR: Could not fetch Bing token';           
        }
	    }
	);
};

module.exports = Bing;
