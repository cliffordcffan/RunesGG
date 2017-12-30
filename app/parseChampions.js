//parse champions to given model

module.exports = function (riotModel, ourModel) {
    riotModel.
    find({}).
    select({_id: 0, data:1}).
    exec(function(err,res){
	  var champions = JSON.parse(JSON.stringify(res))[0].data;
	  for (var x in champions){
		var champ = champions[x];
	  	var entry = new ourModel({name:champ.name,
			id:champ.id,
			title:champ.title,
			wins:0,
			losses:0,
			primaryTrees:[],
			secondaryTrees:[]
		});
		entry.save(function(err){
			if(err) return handleError(err);
		});
	  }
    });
}
