var requestMaker = require('request');
var BB = BingBackend = {};
BB.queryCache = {};
var str;

BB.fetchBingResults = function() {
	if(BB.bingToken && BB.bingExpiration > (new Date().getTime() + 30000)) {
		// Write code to fetch results from Bing with the current BB.bingToken
		var languageFrom = "en", languageTo = "de", text = "Hello";
		console.log('hi');
		var url = "http://api.microsofttranslator.com/V2/Ajax.svc/Translate?oncomplete=mycallback&appId=Bearer " + 
			encodeURIComponent(BB.bingToken) + "&from=" + "dope" + 
			"&to=" + "aardvark" + "&text=" + text;
    requestMaker.get(url)
    	.on('response', function(response) {
    		// console.log(JSON.stringify(response).indexOf("Hallo"));
    		console.log(response.statusCode);
    	});
	}
};

BB.fetchBingToken = function(successCallback) {	
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
	        		BB.bingToken = responseBody.access_token;
	        		BB.bingExpiration = new Date().getTime() + 595000;
	        		successCallback();
	        } else {
	            throw 'ERROR: Could not fetch Bing token';            
	        }
	    }
	);
};

module.exports = BingBackend;
