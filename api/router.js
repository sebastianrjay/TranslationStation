var express = require('express');
var BingBackend = require('./bing/bing-backend.js');
var requestMaker = require('request');
var router = express.Router();

function getHablaaResults() {
	requestMaker.get('http://hablaa.com/hs/translation/apple/eng-deu/')
      .on('response', function(response) {
      	console.log(response.data);
      });
};

router.route('/translate/bing/:from_language/:to_language/:query')
  .get(function(request, response) {
      console.log(request);
  });

BingBackend.fetchBingToken(BingBackend.fetchBingResults);

module.exports = router;
