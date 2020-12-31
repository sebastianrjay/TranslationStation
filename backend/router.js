var express = require('express');
var router = express.Router();

var apiModules = {
  bing: require('./bing/bing-api-handler.js'),
  frengly: require('./frengly/frengly-api-handler.js'),
  yandex: require('./yandex/yandex-api-handler.js'),
};

var fetchAndRenderTranslationFromAPI = function(req, res, apiModule) {
  var body = req.body;
  var srcLang = body.from, destLang = body.to, text = body.text;
  var cachedResponse = apiModule.queryCache.get(srcLang + destLang + text);

  if (cachedResponse) res.send(cachedResponse);
  else apiModule.translate(srcLang, destLang, text, res.send.bind(res));
}

Object.keys(apiModules).forEach(function(apiName) {
  router.post(`/${apiName}/translate/`, function(req, res) {
    fetchAndRenderTranslationFromAPI(req, res, apiModules[apiName]);
  });
});

router.get('/bing/detect_language/', function(req, res) {
  var text = req.query.text;
  apiModules.bing.detectLanguage(text, res.send.bind(res));
});

module.exports = router;
