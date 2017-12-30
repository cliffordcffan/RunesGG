//parse runes to our champion model 

module.exports = function(ourModel, runeModel, treeModel, perkModel){
	runeModel.find().exec(function(err,runeJSON){
		var runes = JSON.parse(JSON.stringify(runeJSON));
		for (var y in runes){
			var rune = runes[y];
			var tree = new treeModel({
				name:rune.name,
				id:rune.id,
				runes:{keystone:[],perk1:[],perk2:[],perk3:[]}
			});
			var numPerks = 3;
			for (i = 0; i < numPerks;i++){
				tree.runes.keystone.push(rune.slots[0].runes[i]);
				tree.runes.perk1.push(rune.slots[1].runes[i]);
				tree.runes.perk2.push(rune.slots[2].runes[i]);
				tree.runes.perk3.push(rune.slots[3].runes[i]);
			}
			ourModel.update({},{ "$push": { "primaryTrees":tree, 
				"secondaryTrees":tree }},{multi:true},function(err,numUpdated){
					if(err) return handleError(err);
					//console.log(numUpdated);			
				}
			);
		}
	});		
}
