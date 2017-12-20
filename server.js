//set up server


var express	= require('express');
var app 	= express();
var mongoose 	= require('mongoose');
var morgan	= require('morgan');
var bodyParser  = require('body-parser');
var methodOverride = require('method-override');
var port = process.env.PORT || 8080;

//config server

mongoose.connect('mongodb://localhost/runes_gg',{useMongoClient:true});

app.use(express.static('./public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride('X-HTTP-Method-Override'));

//routes

//listen
app.listen(port);

