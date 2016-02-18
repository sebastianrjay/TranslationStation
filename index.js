var express = require('express');
var requestMaker = require('request');
var app = express();

function fetchAndRenderBingToken(response) {	
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
	            response.json(body);
	        } else {
	            response.send('ERROR: Could not fetch Bing token');            
	        }
	    }
	);
};

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/bing_token', function(request, response) {
	fetchAndRenderBingToken(response);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
