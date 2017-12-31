//parse player names from league tier list
module.exports = function(league, tempModel){
	for( x in league){
		var player = league[x];
		var entry = new tempModel({name:player.playerOrTeamName});
		entry.save(function(err){
			if(err) return handleError(err);
		});	
	}
}
