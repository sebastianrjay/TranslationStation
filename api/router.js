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

router.route('/translate/bing/')
  .get(function(req, res) {
  		var query = req.query;
      var fromLanguage = query.from, toLanguage = query.to, text = query.text;
      var cachedResponse = Bing.queryCache.get(fromLanguage + toLanguage + text);

      if(cachedResponse) response.send(cachedResponse);
      else Bing.translate(fromLanguage, toLanguage, text, res.send.bind(res));
  });

module.exports = router;
