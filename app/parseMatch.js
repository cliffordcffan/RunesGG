//parse given match set JSON from link

module.exports  = function parser(matchModel, ourModel, request, apiKey){
	matchModel.findOne({parsed:false},function(err,res){
		if(res!=null){
			var matchid = res.id;
			console.log("Trying to parse game: "+matchid);
			//mark game as parsed;
			res.parsed = true;
			res.save();
			var link = 'https://na1.api.riotgames.com/lol/match/v3/matches/'+matchid+'?api_key='+apiKey;
			request(link,function(err,response,body){
				if(!err && response.statusCode==200){	
					var match = JSON.parse(body);
					var patch = match.gameVersion;
					console.log("Game patch is on: "+patch);
					var patchSplit = patch.split(".");
					if(patchSplit[0]=='8' && Number(patchSplit[1]) >= 0){
						var teamOneWin;
						if(match.teams[0].win==='Win'){
							teamOneWin=true;
						}else{
							teamOneWin=false;
						}
						var numParticipants = 10;
						//parse teams
						var i = 0;
						var parseWL = function(participant){
							//console.log("Updating W/R");
							var champID = participant.championId;
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
						//runes
						for(i = 0; i < numParticipants; i++){
							var participant = match.participants[i];
							parseWL(participant);
							if(i < numParticipants/2){
								if(teamOneWin){
									win = true;
								}else{
									win = false;
								}	
							}else{
								if(teamOneWin){
									win = false;
								}else{
									win = true;
								}
							}
							require('./updateParticipant.js')(ourModel,participant,win);
						}

					}else{
						console.log("This game was not on post-runes-reforged patches"); 
					}

				}else{
					console.log("Error code: "+response.statusCode);
				}
			});
			console.log("Waiting...");
			setTimeout(parser,2000,matchModel,ourModel,request,apiKey);
		}
	});
}
