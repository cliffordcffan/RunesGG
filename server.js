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

////////////////////////TESTING/////////////////////////
var Schema = mongoose.Schema;

//default champ list schema
var champSchema = new Schema({},{collection:'champions'});
var champModel = mongoose.model('Champions',champSchema);

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

//schema for match list test set 1
var matchSchema = new Schema({},{collection:'match1'});
var matchModel = mongoose.model('Match1',matchSchema);

//clean database for testing purposes
ourModel.remove({},function(err){});
var champions;

//parse riot api champion list and send to new champ list
champModel.
    find({}).
    select({_id: 0, data:1}).
    exec(function(err,res){
	  champions = JSON.parse(JSON.stringify(res))[0].data;
	  for (var x in champions){
		var champ = champions[x];
	  	var entry = new ourModel({name:champ.name,
			id:champ.id,
			title:champ.title,
			wins:0,
			losses:0}
		);
		entry.save(function(err){
			if(err) return handleError(err);
		});
	  }
    });

//parse first test set of matches
matchModel.
    find().
    select({_id:0, matches:1}).
    exec(function(err,res){
  	matches = JSON.parse(JSON.stringify(res))[0].matches;
	//console.log(matches[0]);
	for (var x in matches){
		var match = matches[x];
		var teamOneWin;
		if(match.teams[0].win==='Win'){
			teamOneWin=true;
		}else{
			teamOneWin=false;
		}
		var numParticipants = 10;
		//parse teams
		for(i = 0; i < numParticipants; i++){
			var champID = match.participants[i].championId;
			//update our db
			var condition = {id: champID},
			    updateWin = { $inc: {wins:1}},
			    updateLoss = { $inc: {losses:1}},
			    update;
			if(i < numParticipants/2){
				if(teamOneWin){
					update = updateWin;
				}else{
					update = updateLoss;
				}	
			}else{
				if(teamOneWin){
					update = updateLoss;
				}else{
					update = updateWin;
				}
			}
			ourModel.update(condition,update, function(err, score){
				if(err) return handleError(err);
			});
		}
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

