var express = require('express');
var requestMaker = require('request');
var router = require('./api/router.js');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use('/angular_components', express.static(__dirname + '/public/angular_components'));
app.use('/api', router);
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(request, response) {
  response.render('pages/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
