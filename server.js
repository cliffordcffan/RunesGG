//set up server


var express	= require('express');
var app 	= express();
var mongoose 	= require('mongoose');
var morgan	= require('morgan');
var bodyParser  = require('body-parser');
var methodOverride = require('method-override');
var port = 8080;

//config server
var URI = 'mongodb://ReadWrite:readwrite123@clusterthefirst-shard-00-00-ym3yd.mongodb.net:27017,clusterthefirst-shard-00-01-ym3yd.mongodb.net:27017,clusterthefirst-shard-00-02-ym3yd.mongodb.net:27017/LOL?ssl=true&replicaSet=ClusterTheFirst-shard-0&authSource=admin';
mongoose.connect(URI,{useMongoClient:true});
//mongoose.connect('mongodb+srv://ReadWrite:readwrite123@clusterthefirst-ym3yd.mongodb.net/LOL',{useMongoClient:true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
	console.log('heyo');
});
app.use(express.static('./public'));
app.use("/images", express.static(__dirname + '/images'));
app.use("/css", express.static(__dirname + '/css'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride('X-HTTP-Method-Override'));

//routes
require('./app/routes.js')(app);

//listen
app.listen(port);

