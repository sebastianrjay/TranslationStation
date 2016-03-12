var express = require('express');
var requestMaker = require('request');
var router = require('./api/router.js');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use('/angular_components', express.static(__dirname + '/public/angular_components'));
app.use('/api', router);
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/partials', express.static(__dirname + '/views/partials'));
app.use('/stylesheets', express.static(__dirname + '/public/stylesheets'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/pages/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
