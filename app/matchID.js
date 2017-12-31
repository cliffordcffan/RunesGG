//match player names to proper accountID 
module.exports = function(league, tempModel, request, apiKey){
	var count = 0;
	for(x in league){
		if(count >19){
			break;
		}
		var player = league[x];
		var tname = player.playerOrTeamName;
		var link = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/'+tname+'?api_key='+apiKey;
		request(link,function(err,res,body){
			if(!err && res.statusCode == 200){
				data = JSON.parse(body);
				//console.log(data.accountId);
				tempModel.findOne({name:tname},function(err,doc){
					doc.id = data.accountId;
					doc.save();
				});
			}
		});
		count++;
	}
}
