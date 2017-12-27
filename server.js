//set up server

var express	= require('express');
var app 	= express();
var mongoose 	= require('mongoose');
var morgan	= require('morgan');
var bodyParser  = require('body-parser');
var methodOverride = require('method-override');
var port = 8080;

//config server
var URI = 'mongodb://ReadWrite:readingwriting123@clusterthefirst-shard-00-00-ym3yd.mongodb.net:27017,clusterthefirst-shard-00-01-ym3yd.mongodb.net:27017,clusterthefirst-shard-00-02-ym3yd.mongodb.net:27017/LOL?ssl=true&replicaSet=ClusterTheFirst-shard-0&authSource=admin';
mongoose.connect(URI,{useMongoClient:true});
mongoose.Promise = global.Promise;

//test connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
	//connection works, no need to print anything out
});

//test
var Schema = mongoose.Schema;

//default champ list schema
var champSchema = new Schema({},{collection:'champions'});
var doc = mongoose.model('Champions',champSchema);

//our own champion schema w/ win rates
var ourChampSchema = new Schema(
  {
    name: {type:String, required:true},
    id: {type:String, required:true},
    title: {type:String},
    wins: {type:Number},
    losses: {type:Number}
  },
  {collection:'ourChampions'}
);
var ourModel = mongoose.model('OurChampions',ourChampSchema);
var champions;
doc.
  find({}).
  select({_id: 0, data:1}).
  exec(function(err,res){
	  champions = JSON.parse(JSON.stringify(res))[0].data;
	  var arr = [];
	  for (var x in champions){
		  arr.push(champions[x]);
	  }
	  //console.log(arr[arr.length-1].id);
	  for (i = 0; i < arr.length; i++){
	  	var curr = new ourModel({name:arr[i].name,
			id:arr[i].id,
			title:arr[i].title,
			wins:0,
			losses:0}
		);
		curr.save(function(err){
			if(err) return handleError(err);
		});
		console.log(curr);
	  }
  });

//app use
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

