//add combinations of trees to our champion doc
module.exports = function(ourModel, combModel){
	var pTree = [8100,8200,8300,8400,8500];
	var sTree = [8100,8200,8300,8400,8500];
	for( var x in pTree){
		var pTreeID = pTree[x];
		for( var y in sTree){
			var sTreeID = sTree[y];
			if(pTreeID != sTreeID){
				var comb = new combModel({
					primary_id: pTreeID.toString(),
					secondary_id: sTreeID.toString(),
				});
				ourModel.update({},{"$push": { "combinations":comb}},
					{multi:true},
					function(err,numUpdated){
						if(err) return handleError(err);
					}
				);
			}
		}
	}
}
