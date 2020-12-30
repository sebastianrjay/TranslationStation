if (process.env.NODE_ENV !== 'production') require('dotenv').config();

var bodyParser = require('body-parser'),
    express = require('express'),
    router = require('./backend/router.js'),
    app = express();

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/angular_components', express.static(__dirname + '/frontend/angular_components'));
app.use('/api', router);
app.use('/dist', express.static(__dirname + '/dist'));
app.use('/images', express.static(__dirname + '/frontend/images'));
app.use('/partials', express.static(__dirname + '/frontend/views/partials'));
app.use('/stylesheets', express.static(__dirname + '/frontend/stylesheets'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/frontend/views/pages/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
