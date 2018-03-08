module.exports = function(ourModel,participant,win){
	ourModel.findOne({id:participant.championId},function(err,champion){
		console.log("Updating rune stats for champion: "+champion.name);
		var numRunes = 3;
		var numTrees = 5;
		//function to update rune stats given runeToUpdate in our db, 
		//runeParsed from riotapi, 
		//and the stat numbers for this rune
		var updateFun = function(runeToUpdate,runeParsed,statsToUpdate){
			if(runeToUpdate.id == runeParsed.toString()){
				if(win){
					runeToUpdate.wins +=1;
				}else{
					runeToUpdate.losses +=1;
				}
				runeToUpdate.stat1 += statsToUpdate[0];
				runeToUpdate.stat2 += statsToUpdate[1];
				runeToUpdate.stat3 += statsToUpdate[2];
			}
		};
		for(var j = 0; j < 5; j++){
			var pTree = participant.stats.perkPrimaryStyle;
			//console.log(champion.primaryTrees[j].id);
			if(champion.primaryTrees[j].id == pTree.toString()){
				champion.primaryTrees[j].games+=1;
				//rune slot in our db	
				var keystone = participant.stats.perk0;
				var perk1 = participant.stats.perk1;
				var perk2 = participant.stats.perk2;
				var perk3 = participant.stats.perk3;
				//parsed rune stat
				var kUpdate = [participant.stats.perk0Var1, participant.stats.perk0Var2 ,participant.stats.perk0Var3];
				var p1Update = [participant.stats.perk1Var1, participant.stats.perk1Var2, participant.stats.perk1Var3];
				var p2Update = [participant.stats.perk2Var1, participant.stats.perk2Var2, participant.stats.perk2Var3];
				var p3Update = [participant.stats.perk3Var1, participant.stats.perk3Var2, participant.stats.perk3Var3];

				for(i = 0; i < numRunes; i++){
					//keystone
					updateFun(champion.primaryTrees[j].runes.keystone[i],keystone,kUpdate);
					//perk1
					updateFun(champion.primaryTrees[j].runes.perk1[i],perk1,p1Update);
					//perk2
					updateFun(champion.primaryTrees[j].runes.perk2[i],perk2,p2Update);
					//perk3
					updateFun(champion.primaryTrees[j].runes.perk3[i],perk3,p3Update);
				}
			}
			var sTree = participant.stats.perkSubStyle;
			if(champion.secondaryTrees[j].id == sTree.toString()){
				champion.secondaryTrees[j].games+=1;
				//rune slot in our db
				var perk4 = participant.stats.perk4;
				var perk5 = participant.stats.perk5
				//parsed rune slot
				var p4Update = [participant.stats.perk4Var1, participant.stats.perk4Var2, participant.stats.perk4Var3];
				var p5Update = [participant.stats.perk5Var1, participant.stats.perk5Var2, participant.stats.perk5Var3];

				for(i = 0; i< numRunes; i++){
					//if rune is in slot 1
					updateFun(champion.secondaryTrees[j].runes.perk1[i],perk4,p4Update);
					updateFun(champion.secondaryTrees[j].runes.perk1[i],perk5,p5Update);
					//if rune is in slot 2
					updateFun(champion.secondaryTrees[j].runes.perk2[i],perk4,p4Update);
					updateFun(champion.secondaryTrees[j].runes.perk2[i],perk5,p5Update);
					//if rune is in slot 3
					updateFun(champion.secondaryTrees[j].runes.perk3[i],perk4,p4Update);
					updateFun(champion.secondaryTrees[j].runes.perk3[i],perk5,p5Update);
				}
			}	
		}
		champion.save();
	});
}
