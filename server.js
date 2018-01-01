//set up server

var express	= require('express');
var expressStylus = require("express-stylus-middleware");
var stylus = require('stylus');
var nib = require('nib');
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
    runes:{keystone:[perkSchema],perk1:[perkSchema],perk2:[perkSchema],perk3:[perkSchema]},
    games:{type:Number,default:0}
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
var matchModel = mongoose.model('FoundMatches', new Schema({id:{type:Number,required:true},
	parsed:{type:Boolean}}));
var tempModel = mongoose.model('FoundPlayers', new Schema({accountid:{type:Number,default:0},
	summonerid:{type:Number},
	name:{type:String}}));

//////////////Commented out after seeding into db///////////
//clean database for testing purposes
//ourModel.remove({},function(err){});

//parse riot api champion list and send to new champ list
//require('./app/parseChampions.js')(champModel,ourModel);

//add runes
//require('./app/parseRunes.js')(ourModel,runeModel,treeModel,perkModel);

//parse set of matches
//tempModel.remove({},function(err){});
var apiKey = 'RGAPI-5c5768f1-1789-4c65-9cb7-17b689fef1e7';
var matchLink = 'https://na1.api.riotgames.com/lol/league/v3/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key='+apiKey;
var request = require('request');
/*
var data;
request(matchLink,function(err,res,body){
	if(!err && res.statusCode ==200){
		data = JSON.parse(body).entries;
		require('./app/parseLeague.js')(data,tempModel);
	}
});*/
//require('./app/matchID.js')(tempModel,request,apiKey);
//require('./app/parseMatchHistory.js')(tempModel,matchModel,request,apiKey);
require('./app/parseMatch.js')(matchModel,ourModel,request,apiKey);

//using ejs
app.set('view engine', 'ejs');
//app use
app.use(express.static('public'));
app.use("/images", express.static(__dirname + '/images'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride('X-HTTP-Method-Override'));

//routes
require('./app/routes.js')(app,path,ourModel);

//listen
app.listen(port);

