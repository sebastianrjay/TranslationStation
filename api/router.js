var express = require('express');
var requestMaker = require('request');
var router = express.Router();

var apiModules = {
  bing: require('./bing/bing-api-handler.js'),
  frengly: require('./frengly/frengly-api-handler.js'),
  yandex: require('./yandex/yandex-api-handler.js'),
};

var fetchAndRenderTranslationFromAPI = function(req, res, apiModule) {
  var query = req.query;
  var srcLang = query.from, destLang = query.to, text = query.text;
  var cachedResponse = apiModule.queryCache.get(srcLang + destLang + text);

  if(cachedResponse) res.send(cachedResponse);
  else apiModule.translate(srcLang, destLang, text, res.send.bind(res));
}

Object.keys(apiModules).forEach(function(apiName) {
  router.get(`/${apiName}/translate/`, function(req, res) {
    fetchAndRenderTranslationFromAPI(req, res, apiModules[apiName]);
  });
});

router.get('/bing/detect_language/', function(req, res) {
  var text = req.query.text;
  apiModules.bing.detectLanguage(text, res.send.bind(res));
});

router.get('/bing/language_codes/', function(req, res) {
	var url = 'http://api.microsofttranslator.com/V2/Ajax.svc/GetLanguagesForTranslate?appId=Bearer '
	var cachedResponse = Bing.queryCache.get("language_codes_json");

	if(cachedResponse) res.send(cachedResponse);
	else Bing.getLanguageCodes(res.send.bind(res), true);
});

module.exports = router;
