var express = require('express');
var Bing = require('./bing/bing-api-handler.js');
var Yandex = require('./yandex/yandex-api-handler.js');
var requestMaker = require('request');
var router = express.Router();

var fetchAndRenderTranslationFromAPI = function(req, res, apiModule) {
  var query = req.query;
  var fromLanguage = query.from, toLanguage = query.to, text = query.text;
  var cachedResponse = apiModule.queryCache.get(fromLanguage + toLanguage + text);

  if(cachedResponse) res.send(cachedResponse);
  else apiModule.translate(fromLanguage, toLanguage, text, res.send.bind(res));
}

router.route('/bing/translate/')
  .get(function(req, res) {
		fetchAndRenderTranslationFromAPI(req, res, Bing);
  });

router.route('/bing/language_codes/')
	.get(function(req, res) {
		var url = 'http://api.microsofttranslator.com/V2/Ajax.svc/GetLanguagesForTranslate?appId=Bearer '
		var cachedResponse = Bing.queryCache.get("language_codes_json");

		if(cachedResponse) res.send(cachedResponse);
		else Bing.getLanguageCodes(res.send.bind(res), true);
	});

router.route('/yandex/translate/')
  .get(function(req, res) {
    fetchAndRenderTranslationFromAPI(req, res, Yandex);
  });

module.exports = router;
