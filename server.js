//set up server

var express	= require('express');
var app 	= express();
var mongoose 	= require('mongoose');
var morgan	= require('morgan');
var bodyParser  = require('body-parser');
var methodOverride = require('method-override');
var port = 8080;
var path = require("path");

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

////////////////////////TESTING/////////////////////////
var Schema = mongoose.Schema;

//default champ list schema
var champSchema = new Schema({},{collection:'champions'});
var champModel = mongoose.model('Champions',champSchema);

//default rune schema
var runeSchema = new Schema({},{collection:'runesReforged'});
var runeModel = mongoose.model('RunesReforged',runeSchema);

//our own champion schema w/ win rates and rune trees + w/r + stats
var perkSchema = new Schema(
  {
    id:{type:String},
    wins:{type:Number, default:0},
    losses:{type:Number, default:0},
    stat1:{type:Number, default:0},
    stat2:{type:Number, default:0},
    stat3:{type:Number, default:0}
  }
);
var treeSchema = new Schema(
  {
    id: {type:String},
    name: {type:String},
    runes:{keystone:[perkSchema],perk1:[perkSchema],perk2:[perkSchema],perk3:[perkSchema]}
  }
);

var ourChampSchema = new Schema(
  {
    name: {type:String, required:true},
    id: {type:String, required:true},
    title: {type:String},
    wins: {type:Number},
    losses: {type:Number},
    primaryTrees: [treeSchema],
    secondaryTrees: [treeSchema]
  },
  {collection:'ourChampions'}
);

var ourModel = mongoose.model('OurChampions',ourChampSchema);
var treeModel = mongoose.model('Tree',treeSchema);
var perkModel = mongoose.model('Perk',perkSchema);

//////////////Commented out after seeding into db///////////
//clean database for testing purposes
//ourModel.remove({},function(err){});

//parse riot api champion list and send to new champ list
//require('./app/parseChampions.js')(champModel,ourModel);

//add runes
//require('./app/parseRunes.js')(ourModel,runeModel,treeModel,perkModel);

//parse first test set of matches
/*
var matchLink = 'https://s3-us-west-1.amazonaws.com/riot-developer-portal/seed-data/matches10.json';
//require('./app/parseMatch.js')(matchLink,ourModel);
var request = require('request');
var data;
request(matchLink,function(err,res,body){
	if(!err && res.statusCode ==200){
		data = JSON.parse(body).matches;
		var parse = require('./app/parseMatch.js')(data,ourModel);
	}
});*/

//using ejs
app.set('view engine', 'ejs');
//app use
app.use(express.static('public'));
app.use("/images", express.static(__dirname + '/images'));
app.use("/css", express.static(__dirname + '/css'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride('X-HTTP-Method-Override'));

//routes
require('./app/routes.js')(app,path);

//listen
app.listen(port);

