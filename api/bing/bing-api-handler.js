var requestMaker = require('request');
var NodeCache = require('node-cache');
var Bing = {};
Bing.queryCache = new NodeCache();

Bing.isAuthenticated = () => {
  return Bing.bingToken && Bing.bingExpiration > (new Date().getTime() + 30000);
};

Bing.detectLanguage = (text, completionCallback) => {
  if (Bing.isAuthenticated()) {
    var url = 'http://api.microsofttranslator.com/V2/Ajax.svc/Detect?appId=Bearer ' +
      encodeURIComponent(Bing.bingToken) + '&text=' + text;

    requestMaker(url, (error, response, body) => {
      if(error) {
        console.error(error);
      } else {
        var srcLang = body.trim().replace(/\"|\(|\)/g, '');
        completionCallback && completionCallback(srcLang);
      }
    });
  } else {
    Bing.fetchAPIToken(Bing.detectLanguage, text, completionCallback);
  }
};

Bing.translate = function(srcLang, destLang, text, completionCallback) {
	if(Bing.isAuthenticated()) {
		var url = "http://api.microsofttranslator.com/V2/Ajax.svc/Translate?oncomplete=mycallback&appId=Bearer " + 
			encodeURIComponent(Bing.bingToken) + "&from=" + srcLang + 
			"&to=" + destLang + "&text=" + text;
			
    requestMaker(url, function(error, response, body) {
  		if(error) {
  			console.error(error);
  		} else {
  			var translatedText = body.slice(13, body.length - 3);
  			Bing.queryCache.set((srcLang + destLang + text), translatedText);
  			completionCallback(translatedText);
  		}
    });
	} else {
		Bing.fetchAPIToken(Bing.translate, srcLang, destLang, text, completionCallback);
	}
};

Bing.fetchAPIToken = function(successCallback) {
	var successCallbackArguments = [].slice.call(arguments, 1);

	requestMaker.post(
	    'https://datamarket.accesscontrol.windows.net/v2/OAuth2-13/',
	    { form: { 
         client_id : process.env.BING_CLIENT_ID, 
         client_secret  : process.env.BING_CLIENT_SECRET, 
         scope  : 'http://api.microsofttranslator.com', 
         grant_type  : 'client_credentials' 
      } },
	    function (error, bingResponse, body) {
        if (!error && bingResponse.statusCode == 200) {
      		var responseBody = JSON.parse(bingResponse.body);
      		Bing.bingToken = responseBody.access_token;
      		Bing.bingExpiration = new Date().getTime() + 595000;
      		successCallback.apply(null, successCallbackArguments);
        } else {
          console.error('ERROR: Could not fetch Bing token:\n', error);
          console.info('Response from Bing:\n', bingResponse);           
        }
	    }
	);
};

Bing.getLanguageCodes = function(completionCallback, convertToJSON) {
	'http://api.microsofttranslator.com/V2/Ajax.svc/GetLanguagesForTranslate';
	if(Bing.isAuthenticated()) {
		var url = 'http://api.microsofttranslator.com/V2/Ajax.svc/GetLanguagesForTranslate?appId=Bearer ' +
			encodeURIComponent(Bing.bingToken);
			
    requestMaker(url, function(error, response, body) {
  		if(error) {
  			console.error(error);
  		} else {
  			if(convertToJSON) {
  				Bing.queryCache.set("language_codes_json", JSON.stringify(body))
  				completionCallback(JSON.stringify(body));
  			} else {
  				Bing.queryCache.set("language_codes", body);
  				completionCallback(body);
  			}
  		}
    });
	} else {
		Bing.fetchAPIToken(Bing.getLanguageCodes, completionCallback, convertToJSON);
	}
}

module.exports = Bing;
