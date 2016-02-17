var debug = debug || console.log;


var config = function() {
	return require('./config.js');
}

// Setup server
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');

var server;
var SERVERPORT = process.env.PORT || 3000;
var app_secret = process.env.APP_SECRET || 'JJFI2332JND0ÖCK11KKZZ334KJJ5JN8K8L9LÆC2JSSP1';


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/buttons/list', function(req,res) {
	res.json([{label:'Open door', action: {verb:'POST', url:'http://www.mbl.is/',body:'shizzle',headers:[]} }]);
});


// Statics
app.use(express.static('public'));


// ELSE!
// app.use(function(req, res, next){
// 	res.writeHead(302, {
// 	  'Location': '/'
// 	});
// 	res.end();
// });

server = app.listen(SERVERPORT, function() {
  debug('Express server listening on port ' + server.address().port);
});
