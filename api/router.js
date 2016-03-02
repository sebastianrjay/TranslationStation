var express = require('express');
var Bing = require('./bing/bing-backend.js');
var requestMaker = require('request');
var router = express.Router();

// function getHablaaResults() {
// 	requestMaker.get('http://hablaa.com/hs/translation/apple/eng-deu/')
//       .on('response', function(response) {
//       	console.log(response.data);
//       });
// };

router.route('/bing/translate/')
  .get(function(req, res) {
  		var query = req.query;
      var fromLanguage = query.from, toLanguage = query.to, text = query.text;
      var cachedResponse = Bing.queryCache.get(fromLanguage + toLanguage + text);

      if(cachedResponse) response.send(cachedResponse);
      else Bing.translate(fromLanguage, toLanguage, text, res.send.bind(res));
  });

router.route('/bing/language_codes/')
	.get(function(req, res) {
		var url = 'http://api.microsofttranslator.com/V2/Ajax.svc/GetLanguagesForTranslate?appId=Bearer '
		Bing.getLanguageCodes(res.send.bind(res), true);
	});

console.log('Language Codes:\n');
Bing.getLanguageCodes(console.log);

module.exports = router;
