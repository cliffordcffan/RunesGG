//parse given match set JSON from link

module.exports  = function(matches, ourModel){
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
}
