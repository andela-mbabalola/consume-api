var express = require('express'),
	async = require('async'),
  request = require('request'),
  config = require('./config');

var app = express();

var router = express.Router();

require('./routes/issues')(router, request, async, config);

app.use('/api', router);

// Set the location of static files
app.use(express.static('./public'));

// Start application server
app.listen(config.PORT, '127.0.0.1', function() {
    console.log('Express server started on 127.0.0.1:' + config.PORT);
})