//parsing the match history of a player in tempModel
//searching for soloq games only
module.exports = function matchHist(tempModel, matchModel, request, apiKey){
	tempModel.findOne({summonerid:{$ne:0}},function(err,player){
		if(player!=null){
			var aid = player.accountid;
			var name = player.name;
			//remove player from future searches
			tempModel.update({accountid:aid},{summonerid:0},function(err,updated){
				if(err) return handleError(err);
			});
			var link = 'https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/'+aid+'?api_key='+apiKey;
			request(link,function(err,response,body){
				if(!err && response.statusCode==200){
					console.log("Reading player: "+name+"\'s games.");
					var data = JSON.parse(body).matches;
					for(var x in data){
						var match = data[x];
						//ranked solo games only
						if(match.queue==420){
							matchModel.update({id:match.gameId},
								{id:match.gameId},
								{upsert:true},
								function(err,numUpdated){
									if(err) return handleError(err);
								}
							);
						}
					}
				}else{
					console.log("Error code: "+response.statusCode);
				}
			});
			console.log("Waiting...");
			setTimeout(matchHist,2500,tempModel,matchModel,request,apiKey);

		}
	});
}
