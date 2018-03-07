//match player names to proper accountID 
module.exports = function match(tempModel, request, apiKey){
	tempModel.findOne({accountid:0},function(err,res){
		if(res != null){
			var sumid = res.summonerid;
			var name = res.name;
			console.log(name);
			var link = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/'+sumid+'?api_key='+apiKey;
			request(link,function(err,response,body){
				if(!err && response.statusCode==200){
					var data = JSON.parse(body);
					console.log("Updating player: "+name);
					res.accountid = data.accountId;
					res.save();
				}else{
					console.log("Error code: "+response.statusCode);
				}
			});
			console.log("Waiting...");
			setTimeout(match,1500,tempModel,request,apiKey);
		}else{
			
		}

	});

}
