var request = require('request');
var NodeCache = require('node-cache');
var Bing = {};
Bing.queryCache = new NodeCache();

Bing.isAuthenticated = () => {
  return Bing.bingToken && Bing.bingExpiration > new Date().getTime();
};

Bing.detectLanguage = (text, completionCallback) => {
  if (Bing.isAuthenticated()) {
    var url = process.env.BING_LANGUAGE_DETECTION_ROOT_URL + '?appId=Bearer ' +
      encodeURIComponent(Bing.bingToken) + '&text=' + text;

    request(url, (error, response, body) => {
      if (error) {
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
	if (Bing.isAuthenticated()) {
		var url = process.env.BING_TRANSLATION_ROOT_URL +
      '?oncomplete=mycallback&appId=Bearer ' + 
      encodeURIComponent(Bing.bingToken) + '&from=' + srcLang + 
			'&to=' + destLang + '&text=' + text;
			
    request(url, function(error, response, body) {
  		if (error) {
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
  var options = {
    uri: 'https://api.cognitive.microsoft.com/sts/v1.0/issueToken',
    method: 'POST',
    headers: {
      'Ocp-Apim-Subscription-Key': process.env.BING_SUBSCRIPTION_KEY,
    },
  };

	request(options, function (error, bingResponse, body) {
      if (!error && bingResponse.statusCode == 200) {
        Bing.bingToken = bingResponse.body;
    		Bing.bingExpiration = new Date().getTime() + 540000; // Expire in 9 min
    		successCallback.apply(null, successCallbackArguments);
      } else {
        console.error('ERROR: Could not fetch Bing token:\n', error);
        console.info('Response from Bing:\n', bingResponse);           
      }
    }
	);
};

Bing.getLanguageCodes = function(completionCallback, convertToJSON) {
	if (Bing.isAuthenticated()) {
		var url = process.env.BING_LANGUAGES_ROOT_URL + '?appId=Bearer ' +
			encodeURIComponent(Bing.bingToken);
			
    request(url, function(error, response, body) {
  		if (error) {
  			console.error(error);
  		} else {
  			if (convertToJSON) {
  				Bing.queryCache.set('language_codes_json', JSON.stringify(body))
  				completionCallback(JSON.stringify(body));
  			} else {
  				Bing.queryCache.set('language_codes', body);
  				completionCallback(body);
  			}
  		}
    });
	} else {
		Bing.fetchAPIToken(Bing.getLanguageCodes, completionCallback, convertToJSON);
	}
}

module.exports = Bing;
